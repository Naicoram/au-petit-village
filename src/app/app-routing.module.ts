import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'app-home', component: HomeComponent },       
  { path: 'app-about', component: AboutComponent },  
  { path: 'app-product', component: ProductComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
