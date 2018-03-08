import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FormsModule, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

import {Http} from "@angular/http";
import { Guest } from './guest';
import { GuestbookService } from './guestbook.service';


@Component({
  selector: 'app-guest',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {
  
    isLoading: boolean = true;

    @ViewChild("myForm") myForm;
   title = "form Title";
   allItems: Guest[];  //grid of items
   item: any = {}; //current item
   itemLoad: any ={};  //pristine not dirty selected item
   itemEdit: any = {};  // selected/edited item
   newItem: Guest;
   statusCode: number;
  
    constructor(private itemService: GuestbookService) {
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
                  this.isLoading = false;
                 // this.myForm2.reset();
                },
                 errorCode =>  this.statusCode = errorCode);   
    }
    getItem(item:Guest){
    this.itemLoad = Object.assign({},item);
    this.itemEdit = Object.assign({}, item);
 
    }
    deleteItem(item:Guest){
      this.isLoading = true;
      this.itemService.deleteItem(item)
       .subscribe(
              data => {this.item = data;
               this.isLoading = false;},
              errorCode =>  this.statusCode = errorCode);   

    }
    cancel(){
      this.itemEdit = Object.assign({}, this.newItem);
    
    }
    save(){
     // this.item = this.itemService.updateItem(this.itemEdit);
      this.isLoading = true;
      this.itemService.updateItem(this.itemEdit)
       .subscribe(
              data => {this.item = data;
               this.isLoading = false;
               this.itemEdit = Object.assign({}, this.newItem);
               this.myForm.reset();},
               
              errorCode =>  this.statusCode = errorCode);   


    }
    showNewForm() {
   this.myForm.reset();
    }

  }
























// import { Guest } from './guest';
// import { GuestbookService } from './guestbook.service';
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-guest-book',
//   templateUrl: './guestbook.component.html',
//   styleUrls: ['./guestbook.component.css']
// })
// export class GuestbookComponent {

//   @ViewChild("myForm") myForm;
//   title = "form Title";
//   allItems: Guest[];  //grid of items
//   item: any = {}; //current item
//   itemLoad: any ={};  //pristine not dirty selected item
//   itemEdit: any = {};  // selected/edited item
//   statusCode: number;


//   constructor(private guestBookService: GuestbookService) { }


// }




// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-guestbook',
//   templateUrl: './guestbook.component.html',
//   styleUrls: ['./guestbook.component.css']
// })
// export class GuestbookComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
