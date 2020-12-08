import { Injectable, Inject, Injector } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoaderService } from '../shared/shared-module/loader/LoaderService';
import { ToastrService } from 'ngx-toastr';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppConfigService } from '../shared/AppConfigService';
import { NgxSpinnerService } from 'ngx-spinner';
import { from } from 'rxjs/internal/observable/from';

@Injectable({ providedIn: 'root' })
export class LoaderInterceptor implements HttpInterceptor {
  constructor(
    private loaderService: LoaderService,
    private appConfigService: AppConfigService,
    @Inject(Injector) private readonly injector: Injector,
    private spinnerService: NgxSpinnerService
  ) {



   }

  cachedRequest: Promise<any>;
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   

    return from(this.handle(req, next));
  }

  private async handle(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    const headerSettings = req.headers.keys().reduce(
      (acc, cur) => {
        acc[cur] = req.headers.getAll(cur);
        return acc;
      }, {});
    headerSettings['Content-Type'] = 'application/json-patch+json';

    this.spinnerService.show();

    const
      headers = new HttpHeaders(headerSettings),
      newRequest = req.clone({ headers });

    const result = next.handle(newRequest).toPromise().finally(() => {  this.spinnerService.hide() })

    return result.catch(async (err) => {
       
      if (err.status === 401) {
       
        return next.handle(req).toPromise()
      }
      else if (err.status === 409) {
        var error_msg;

        if (err.error instanceof Blob) {
          err.error.text().then(text => {
            error_msg = (JSON.parse(text).message);
            // this.spinnerService.hide();
            this.toastrService.error(error_msg, '', {
              positionClass: 'toast-top-center',
            });

          });
        }


      }
      else if (err.status === 500) {
        var error_msg;

        if (err.error instanceof Blob) {
          err.error.text().then(text => {
            error_msg = (JSON.parse(text).message);
            // this.spinnerService.hide();
            this.toastrService.error(error_msg + err.url, '', {
              positionClass: 'toast-top-center',
            });
          });
        }


      }


      else if (err.status === 0) {
          this.toastrService.error("Cannot Connect To"+' '+ err.statusText+' '+err.url, '', {
            positionClass: 'toast-top-center',
          });
      }
      else {
        if (err.error instanceof Blob) {
          err.error.text().then(text => {
            error_msg = (JSON.parse(text).message);
            // this.spinnerService.hide();
            this.toastrService.error(error_msg + err.url, '', {
              positionClass: 'toast-top-center',
            });
          });
        }
      }
    });
  }
  private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
  }
}