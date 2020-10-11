import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailsComponent } from './category-details/category-details.component'
import { ProductDescriptionComponent } from './product-description/product-description.component';

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'prefix'},
  { path:'category', component:CategoryDetailsComponent, pathMatch: 'full' },
  { path:'product', component:ProductDescriptionComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
