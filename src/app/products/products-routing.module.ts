import { BasicsPageComponent } from './basics-page/basics-page.component';
import { NgModule } from '@angular/core';
import { NumbersPageComponent } from './numbers-page/numbers-page.component';
import { OrderComponent } from './order/order.component';
import { RouterModule, Routes } from '@angular/router';
import { UncommonPageComponent } from './uncommon-page/uncommon-page.component';

const routes: Routes = [
  {
    path:'',
    component:BasicsPageComponent
  },
  {
    path:'numbers',
    component:NumbersPageComponent
  },
  {
    path:'uncommon',
    component:UncommonPageComponent
  },
  {
    path:'custom',
    component:OrderComponent
  },
  {
    path:'**',
    component:BasicsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
