import { Component, OnInit } from '@angular/core';

// import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabNavigate(tab: string) {
      let yourElem = <HTMLInputElement>document.querySelector('#' + tab);

   //  $('.nav-tabs a:last').tab('show');
    yourElem.click();
}

nextClick(tab: string) {
 // $('#2').tab('show'); 
 // let yourElem = <HTMLInputElement>document.querySelector('#' + tab);
  //$("##3").click();
    //   $('.nav-tabs a:last').tab('show');
 // let yourElem = <HTMLInputElement>document.querySelector('#' + tab);

 //$('.nav-tabs a:last').tab('show');
//yourElem.click();
//$('.nav-tabs a[href="#' + tab + '"]').tab('show');
//$("#bb").tab('show');

let yourElem = <HTMLInputElement>document.querySelector('#' + tab);

   //  $('.nav-tabs a:last').tab('show');
    yourElem.click();

}

}
