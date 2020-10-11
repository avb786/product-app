import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailsComponent } from './category-details/category-details.component'

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'prefix'},
  { path:'category', component:CategoryDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
