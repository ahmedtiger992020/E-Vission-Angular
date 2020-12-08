import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { merge } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { Utils } from 'src/app/shared/shared-module/models/utils';
import { ProductGetAllInputDto, ProductGetAllOutputDto, ProductServiceProxy } from 'src/app/shared/swagger/SwaggerGenerated';
import { TableUtil } from '../tableUtil';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [Utils.Animations]

})
export class ListComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  resultsLength = 0;
  dataSource: any;
  displayedColumns: string[] = ['Id', 'Name', 'Photo', 'Price','symbol'];
  displayedfilter: string[] = ['Idfilter', 'Namefilter','Pricefilter'];

  filterValues = {};
  filterSelectObj = [];
  Filters: boolean = false;
  defualtPageSize: number = Utils.DEFUALT_PAGE_SIZE;
  searchDto = {
    paging: {
      pageNumber: Utils.DEFUALT_PAGE_NUMBER,
      pageSize: Utils.DEFUALT_PAGE_SIZE
    },
    sortingModel: {
      sortingExpression: "",
      sortingDirection: 0
    },
    name: "",
    price: 0,

  }
  constructor(private router: Router,
    public dialog: MatDialog,
    private productService:ProductServiceProxy,
    private utils: Utils,
    private spinnerService: NgxSpinnerService) {
    super();
  }
  ngAfterViewInit() {
    this.loadData();
  }
  loadData() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.prepareSearchObject(this.paginator, this.sort, this.searchDto);
          return this.productService.getAll(this.searchDto as ProductGetAllInputDto);
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.resultsLength = data.totalCount;
          return data.data;
        }),
      )
      .subscribe((data) => {
        this.dataSource = data;
        this.spinnerService.hide();
      });  }
  ngOnInit() {
    this.spinnerService.show();

    debugger
  }
  exportTable() {
    const onlyNameAndSymbolArr: Partial<ProductGetAllOutputDto>[] = this.dataSource.map(x => ({
      name: x.name,
      price: x.price
    }));
    TableUtil.exportTableToExcel(onlyNameAndSymbolArr, "productsTbl");
  }
  navigateToAddEditPage(productId) {
    this.router.navigateByUrl(`/EditProduct?id=${productId}`, {
      queryParams: {
        id: productId,
      }
    });
  }

  deleteProductById(productId: number) {
    
    this.spinnerService.show();
    let dialogRef = this.utils.openDialog(
      'حذف',
      'هل أنت متأكد من حذف هذا المنتج',
      'حذف',
      ''
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productService.delete(productId)
        .subscribe((data) => {
          if (data.isSuccess) {
            this.spinnerService.hide();

            this.loadData();
          }
        });      }
    });

    this.spinnerService.hide();


  }
  clearSearch() {
    // reset search object
    this.searchDto = {
      paging: {
        pageNumber: Utils.DEFUALT_PAGE_NUMBER,
        pageSize: Utils.DEFUALT_PAGE_SIZE
      },
      sortingModel: {
        sortingExpression: "",
        sortingDirection: 0
      },
      name: "",
      price: 0,
    };

    this.loadData();
  }

}
