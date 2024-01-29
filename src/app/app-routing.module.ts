import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './products/basics-page/basics-page.component';
import { NumbersPageComponent } from './products/numbers-page/numbers-page.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./products/products.module').then(m=> m.ProductsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
