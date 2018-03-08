import { Component, OnInit } from '@angular/core';

import {Http} from "@angular/http";

import { Applicant } from '../shared/applicant';
import { BootTableService } from '../shared/boot-table.service';

@Component({
  templateUrl: './boot-table.component.html',
  styleUrls: ['./boot-table.component.css']
})
export class BootTableComponent implements OnInit {

  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";



  constructor(private http: Http, private _bootTableService: BootTableService) {
  }

  ngOnInit(): void {

    
      this.http.get('../shared/data.json')
      this.data = this._bootTableService.getItemsFromData()

  }

  public toInt(num: string) {
      return +num;
  }

  public sortByWordLength = (a: any) => {
      return a.city.length;
  }

}