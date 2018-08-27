import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewsService {

  newsData : any;
  sportsData :any;
  newsUrl = 'https://newsapi.org/v2/top-headlines?sources=news24&apiKey=43731f392d4040e28d7e610d98e09721';
  sportsUrl = 'https://newsapi.org/v2/top-headlines?sources=espn-cric-info&apiKey=43731f392d4040e28d7e610d98e09721';
  timesUrl = 'https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=43731f392d4040e28d7e610d98e09721';
  constructor( private _http : Http) {

   }

getData(){
  return new Promise((resolve, reject) => {
    this._http.get(this.newsUrl).subscribe(res => {
     this.sportsData = res;
     this.sportsData = this.sportsData._body;
     this.sportsData = JSON.parse(this.sportsData);
     this.sportsData = this.sportsData.articles;
      

     (resolve(this.sportsData))
    });
  });
}

getsportsNews(){
  return new Promise((resolve, reject) => {
    this._http.get(this.sportsUrl).subscribe(res => {
     this.newsData = res;
     this.newsData = this.newsData._body;
     this.newsData = JSON.parse(this.newsData);
     this.newsData = this.newsData.articles;
      

     resolve(this.newsData);
    });
  });
}
getTimesNews(){
  return new Promise((resolve, reject) => {
    this._http.get(this.timesUrl).subscribe(res => {
     this.newsData = res;
     this.newsData = this.newsData._body;
     this.newsData = JSON.parse(this.newsData);
     this.newsData = this.newsData.articles;
      

     resolve(this.newsData);
    });
  });
} 


  }
