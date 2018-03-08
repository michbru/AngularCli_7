import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable";
import { DataFilterPipe } from './boot-table/data-filter.pipe'

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BootTableComponent } from './boot-table/boot-table.component';
import { BootTableService } from './shared/boot-table.service';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products/products.service';
import { HomeComponent } from './home/home.component';
import { SoonComponent } from './soon/soon.component';
import { StepsComponent } from './steps/steps.component';
import { SlideEditComponent } from './slide-edit/slide-edit.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import {GuestbookService } from './guestbook/guestbook.service';
import { EmployeesComponent } from './employees/employees.component';
import {EmployeeService } from './employees/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    BootTableComponent,DataFilterPipe, ProductsComponent, HomeComponent, SoonComponent, StepsComponent, SlideEditComponent, GuestbookComponent, EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
  ],
  providers: [BootTableService, ProductsService, GuestbookService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
