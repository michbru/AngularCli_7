import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BootTableComponent} from './boot-table/boot-table.component';
import {ProductsComponent} from './products/products.component';
import {HomeComponent} from './home/home.component';
import {SoonComponent} from './soon/soon.component';
import {StepsComponent} from './steps/steps.component';
import { SlideEditComponent } from './slide-edit/slide-edit.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {
    path: '',
    component: SlideEditComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'boot-table',
    component: BootTableComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'steps',
    component: StepsComponent
  },
  {
    path: 'slide-edit',
    component: SlideEditComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'guest',
    component: GuestbookComponent,
  },
  { path: '**', component: SoonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
