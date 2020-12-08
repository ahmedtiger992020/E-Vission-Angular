import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { NgxSpinnerService } from 'ngx-spinner';
import { FileData } from 'src/app/shared/shared-module/models/file-data';
import { FileDto } from 'src/app/shared/shared-module/models/file-Dto';
import { Utils } from 'src/app/shared/shared-module/models/utils';
import { ProductAddInputDto, ProductServiceProxy, ProductUpdateInputDto } from 'src/app/shared/swagger/SwaggerGenerated';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
    numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  productForm: FormGroup;
  productId: number;
  editMode: boolean = false;
  urls: Array<FileData> = new Array<FileData>();
  newFiles: Array<FileDto> = new Array<FileDto>();
  rootPath: string = "http://localhost:44310/Documents/";

  constructor(
    private productService: ProductServiceProxy,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,

    public dialog: MatDialog,
    private utils: Utils,
    private spinnerService: NgxSpinnerService) {
  }

  ngOnInit() {
    this.spinnerService.show();
    this.readQueryParams();
    this.createFormGroup();
  }
  createFormGroup() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      price: new FormControl('', [Validators.required, Validators.maxLength(5)])

    })
  }
  readQueryParams() {
    this.route.queryParams.subscribe(params => {
      this.productId = params['id'] || 0;
      if (this.productId) {
        this.editMode = true;
        this.loadData(Number(this.productId));
      }
      else {
        this.spinnerService.hide();
      }
    });
  }

  loadData(productId: number) {
    if (this.editMode) {
      this.productService.getById(productId)
        .subscribe(res => {
          if (res.isSuccess && res.data) {
            this.productForm.patchValue(res.data.toJSON());
            debugger
            this.urls.push({
              url:`${this.rootPath+res.data.photo}.png`,
              name: res.data.name,
            });
            this.spinnerService.hide();
          }
          else
            this.navigateToList();
        });
    }
  }
  public navigateToList() {
    this.productForm.reset();
    this.router.navigateByUrl('/');
  }

  save() {
    this.spinnerService.show();
    var productFormValue = this.productForm.value;
    if (this.productForm.valid) {
      // call api
      if (this.productId > 0) {
        var ProductUpdateInput = productFormValue as ProductUpdateInputDto;
        ProductUpdateInput.id = Number(this.productId);
        ProductUpdateInput.name = productFormValue.name
        ProductUpdateInput.price = productFormValue.price == "" ? 0 : Number(productFormValue.price);
        ProductUpdateInput.photo = this.urls[0].url;

        this.productService.update(ProductUpdateInput)
          .subscribe((data) => {
            this.spinnerService.hide();
            if (data.isSuccess) {
              this.utils.openDialogAfterSave("تم التعديل بنجاح", "تعديل ",
                "الذهاب الي الرئيسية", "",
                "/", "/");
              this.productForm.reset();
            }

          })
      }
      else {
        var productAddInput = productFormValue as ProductAddInputDto;
        productAddInput.name = productFormValue.name
        productAddInput.price = productFormValue.price == '' ? 0 : Number(productFormValue.price);
        productAddInput.photo = this.urls[0].url;

        this.productService.add(productAddInput)
          .subscribe((data) => {
            this.spinnerService.hide();
            if (data.isSuccess) {
              this.utils.openDialogAfterSave("تم الإضافة بنجاح", "إضافة ",
                "الذهاب الي الرئيسية", "",
                "/", "/");
              this.productForm.reset();
            }
          })
      }

    }
  }
  fileProgress(event) {
    if (event.target.files)
      for (let file of event.target.files) {

        var mimeType = file.type;
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (e: any) => {
          let fileDto: FileDto = new FileDto();
          fileDto.file = e.target.result.split(',')[1];
debugger
          // check if there are matching attachments
          let matchedAttachment = this.urls.findIndex((f) => f.name == file.name || f.name.split(this.rootPath)[1] == file.name);

          // if exist differentiate by dateTime
          if (matchedAttachment != -1) {
            let filename = file.name.split('.');
            fileDto.name = `${filename[0]}-${Guid.create()}.${filename[1]}`;
          } else fileDto.name = file.name;


          if (mimeType.includes('image')) {
            this.urls.push({
              url: e.target.result,
              name: fileDto.name,
            });
          }
          this.newFiles.push(fileDto);

        };
      }
  }

  getlink(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


  deleteFile(deletedUrl: string) {

    this.urls = this.urls.filter((url) => url.name != deletedUrl['name']);
    this.newFiles = this.newFiles.filter((f) => f.name != deletedUrl['name']);
    
  }
}