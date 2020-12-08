import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './modules/products/add-edit/add-edit.component';
import { ListComponent } from './modules/products/list/list.component';


const routes: Routes = [{
  path: '',
  component: ListComponent,
},
{ 
  path: "AddProduct",
  component: AddEditComponent,
},
{
  path: "EditProduct",
  component: AddEditComponent,
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
