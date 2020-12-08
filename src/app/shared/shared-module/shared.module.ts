import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppConfigService } from './../AppConfigService';
import { HttpClient } from '@angular/common/http'; 

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatInputModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatTreeModule,
  MatCheckboxModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { Utils } from './models/utils';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { ImagePreviewComponent } from './Components/image-preview/image-preview.component';
import { ToastrModule } from 'ngx-toastr';

export function getApiBaseUrl(): string {
  return AppConfigService.appConfig.ApiBaseUrl;
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, document.baseURI + '/assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    ConfirmDialogComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    ImagePreviewComponent
    
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatToolbarModule ,
    FormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader, // exported factory function needed for AoT compilation
        deps: [HttpClient],
      },
      isolate: false,
    }),
    ToastrModule.forRoot(),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTreeModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatCheckboxModule,
    MatButtonModule,
    SuccessDialogComponent,
    ErrorDialogComponent,
    ImagePreviewComponent,
    MatTooltipModule,
  ],
  providers: [
    // AccountServiceProxy,
    // { provide: API_BASE_URL, useFactory: getApiBaseUrl },
    Utils,
    // MenuManagmentServiceProxy
  ],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule {}
