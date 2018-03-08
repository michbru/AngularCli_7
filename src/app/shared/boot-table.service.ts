import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

import { Applicant } from './applicant'
import { APPLICANTS } from './data.json';

@Injectable()
export class BootTableService {
  pItems: Applicant[] = APPLICANTS;

  constructor() { }

  getItemsFromData(): Applicant[] {
    return this.pItems;
  }
  addItem(applicant: Applicant) {
    this.pItems.push(applicant);
  }
  updateItem(applicant: Applicant) {
    const index = this.pItems.map(x => x.id).indexOf(applicant.id);
    this.pItems[index] = applicant;
  }
  deleteItem(applicant: Applicant) {
    this.pItems.splice(this.pItems.indexOf(applicant), 1);
  }


  getAllItems(): Observable<Applicant[]> {
    
           var test = this.pItems;
            return Observable.of(this.pItems).delay(1000);
    
        }

        getItemById(item: Applicant){
        if(item.id){
          const index = this.pItems.map(x => x.id).indexOf(item.id);
          var ret = this.pItems[index] = item;
          return Observable.of(ret).delay(500);
          }
        }




    private extractData(res: Response) {          
	    let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status);
    }
}
