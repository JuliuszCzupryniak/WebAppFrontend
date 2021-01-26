import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BasketComponent} from './basket/basket.component';
import {OrderCompletionComponent} from './order-completion/order-completion.component';
import {OrdersComponent} from './orders/orders.component';

const routes: Routes = [
  {
    component: DashboardComponent,
    path: 'dashboard'
  },
  {
    component: BasketComponent,
    path: 'basket'
  },
  {
    component: OrderCompletionComponent,
    path: 'order'
  },
  {
    component: OrdersComponent,
    path: 'orders'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
