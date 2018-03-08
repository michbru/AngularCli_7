import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FormsModule, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

import {Http} from "@angular/http";
import { Product } from './product';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
    isLoading: boolean = true;
    
  @ViewChild("myForm") myForm;
   title = "form Title";
   allItems: Product[];  //grid of items
   item: any = {}; //current item
   itemLoad: any ={};  //pristine not dirty selected item
   itemEdit: any = {};  // selected/edited item
   statusCode: number;
  
    constructor(private itemService: ProductsService) {
    }
  
    ngOnInit(): void {
      this.isLoading = true;
      this.getAllItems();
    }   
  
    getAllItems() {
      this.isLoading = true;
         this.itemService.getItemsFromData()
          .subscribe(
                 data => {this.allItems = data;
                  this.isLoading = false;},
                 errorCode =>  this.statusCode = errorCode);   
    }
    getItem(item:Product){
    this.itemLoad = Object.assign({},item);
    this.itemEdit = Object.assign({}, item);
 
    }
    deleteItem(item:Product){
      this.isLoading = true;
      this.itemService.deleteItem(item)
       .subscribe(
              data => {this.item = data;
               this.isLoading = false;},
              errorCode =>  this.statusCode = errorCode);   

    }

    cancel(){
      this.itemEdit = this.itemService.updateItem(this.itemLoad);
    }
    save(){
     // this.item = this.itemService.updateItem(this.itemEdit);
      this.isLoading = true;
      this.itemService.updateItem(this.itemEdit)
       .subscribe(
              data => {this.item = data;
               this.isLoading = false;},
              errorCode =>  this.statusCode = errorCode);   


    }
    showNewForm() {
      this.itemEdit = {} as Product;
      this.myForm.reset();

    }

  }
