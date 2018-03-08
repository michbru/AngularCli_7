import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { Observable } from 'rxjs';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Http } from "@angular/http";

import { Applicant } from '../shared/applicant';
import { BootTableService } from '../shared/boot-table.service';


//import {FormsModule, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-boot',
  templateUrl: './slide-edit.component.html',
  styleUrls: ['./slide-edit.component.css']
})
export class SlideEditComponent implements OnInit {

  //  @ViewChild("myForm") myForm;
  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";
  statusCode: number;
  isLoading: boolean = true;


  @ViewChild("myForm") myForm;
  title = "form Title";

  item: any = {};
  allItems: Applicant[];
  // statusCode: number;
  // myForm: NgForm
  formRef2: any;

  constructor(private http: Http, private _bootTableService: BootTableService) {
  }

  ngOnInit(): void {

    this.isLoading = true;
    this.getAllItems();

  }

  //slide edit form
  getAllItems() {
    this.isLoading = true;
    this._bootTableService.getAllItems()
      .subscribe(
      data => {
      this.allItems = data;
        this.data = data;
        this.isLoading = false;
      },
      errorCode => this.statusCode = errorCode);
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }


  tabNavigate(tab: string) {
    let yourElem = <HTMLInputElement>document.querySelector('#' + tab);

    yourElem.click();
  }

  nextClick(tab: string) {

    let yourElem = <HTMLInputElement>document.querySelector('#' + tab);
    yourElem.click();

  }

  saveItem() {
    this.nextClick('aaLink');
  }


  loadItemToEdit(item:Applicant) {
          
    let yourElem = <HTMLInputElement>document.querySelector('#' + "bbLink");
    yourElem.click();
    this._bootTableService.getItemById(item)
      .subscribe(
      data => {

        this.item = data;
      },
      errorCode => this.statusCode = errorCode);
  }


}


