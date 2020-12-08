import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getApiBaseUrl } from './shared/shared-module/shared.module';
import { SharedModule } from './shared/shared-module/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderService } from './shared/shared-module/loader/LoaderService';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderComponent } from './shared/shared-module/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatRadioModule,
  MatCardModule,
  MatDatepickerModule,
  MatPaginatorIntl,
  MatTabsModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AsyncPipe } from '@angular/common';
import { PaginatorIntlService } from './shared/service/matPaginatorIntlCroClass';
import { API_BASE_URL, ProductServiceProxy } from './shared/swagger/SwaggerGenerated';
import { ListComponent } from './modules/products/list/list.component';
import { AddEditComponent } from './modules/products/add-edit/add-edit.component';
@NgModule({
  declarations: [AppComponent, LoaderComponent, ListComponent, AddEditComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    NgxSpinnerModule,
  ],
  providers: [
    AsyncPipe,
    LoaderService,
    ToastrService,
    FormBuilder,
    NgxSpinnerService,
    { provide: API_BASE_URL, useFactory: getApiBaseUrl },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    ToastrService,
    ProductServiceProxy,
    { provide: MatPaginatorIntl, useClass: PaginatorIntlService }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent,],
})
export class AppModule { }
