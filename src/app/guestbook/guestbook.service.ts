import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

import { Guest } from './guest'
import { GUESTS } from './data.json';



@Injectable()
export class GuestbookService {

    pItems: Guest[] = GUESTS;

	constructor(private http:Http) { 
	}
    getItemsFromData(): Observable<Guest[]> {

       var test = this.pItems;
        return Observable.of(this.pItems).delay(1000);

    }
    addItem(item: Guest) {
        this.pItems.push(item);
        return Observable.of(item).delay(500);
      }
      updateItem(item: Guest) {
        if(item.id){
        const index = this.pItems.map(x => x.id).indexOf(item.id);
        var ret = this.pItems[index] = item;
        return Observable.of(ret).delay(500);
        }
        //do add
        else {
              var maxId = Math.max.apply(Math,this.pItems.map(function(o){return o.id;}))
              item.id = maxId+1;
              this.addItem(item);
              return Observable.of(item).delay(500);
        }
      }
      deleteItem(item: Guest) {
        this.pItems.splice(this.pItems.indexOf(item), 1);
        return Observable.of(null);
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

// import { Injectable } from '@angular/core';

// @Injectable()
// export class GuestbookService {

//   constructor() { }

// }
