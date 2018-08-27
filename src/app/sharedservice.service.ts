import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class sharedService {

  constructor() { }

  default_img = JSON.parse(localStorage.getItem('user')).image_url;

 private subject = new BehaviorSubject<any>(undefined);
  cast = this.subject.asObservable();

    updateImage() { 
        this.subject.next('upload');      
      }

      getImage(){
        return this.subject;
      }
}
