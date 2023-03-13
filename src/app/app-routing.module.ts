import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products-component/products-component.component';
import { ContactsComponent } from './page/contacts/contacts.component';
//Khai báo một constant chứa các route của app
const routes: Routes = [
  // { path: '', component: PageComponentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contacts', component: ContactsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
