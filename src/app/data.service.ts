import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    constructor(private _http : Http) { }
    user : Object= {
      username : 'Ayush',
      email : 'ayush21.juit@gmail.com'
    };
    data:any;
 

  // getData(){
  //   return new Promise((resolve, reject) => {
  //       this._http.get('/sample').subscribe(res => {
  //         this.data = res;
  //       });
  //   });
   
  //}

}
