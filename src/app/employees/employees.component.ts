import { Component, ViewChild, OnInit } from '@angular/core';
import {FormsModule, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';


import {Http} from "@angular/http";

import { EMPLOYEES } from './data.json';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-emp',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
isLoading: boolean = true;
isLoading2: boolean = false;
languages = ['English', 'Spanish', 'Other'];
allItems: Employee[];
model: Employee[];
newItem: Employee;

itemPristine: any = {};
itemEdit: any = {};  // selected/edited item
//model = 

constructor(private itemService: EmployeeService) {
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
 
              this.isLoading = false;});   
}


loadItemToEdit(item:Employee) {
  this.isLoading2 = true;
this.itemService.getItemById(item)
.subscribe(
data => {
  this.itemPristine = Object.assign({},item);
  this.itemEdit = Object.assign({}, item);
 // this.itemEdit = data;
  this.isLoading2 = false;
//this.model = data;
});
}

cancel(){
  this.itemEdit = Object.assign({}, this.newItem);

}
save(){
 // this.item = this.itemService.updateItem(this.itemEdit);
  this.isLoading = true;
  this.itemService.updateItem(this.itemEdit)
   .subscribe(
          data => {this.itemEdit = data;

           this.isLoading = false;});   


}

}
