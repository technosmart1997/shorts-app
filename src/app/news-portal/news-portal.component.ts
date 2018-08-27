import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-portal',
  templateUrl: './news-portal.component.html',
  styleUrls: ['./news-portal.component.css']
})
export class NewsPortalComponent implements OnInit {

  todaysNews : any;
  sportsNews : any;
  timesNews : any;
  constructor( private newsService : NewsService) { }

  ngOnInit() {
    this.newsService.getData().then((res) => {
        this.todaysNews = res;
        //console.log(this.todaysNews);
    })

    this.newsService.getsportsNews().then((res) => {
      this.sportsNews = res;
      // console.log(this.sportsNews);
  })


  this.newsService.getTimesNews().then((res) => {
    this.timesNews = res;
    // console.log(this.sportsNews);
})
  }

}
