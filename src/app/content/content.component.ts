import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

users;
  constructor(private dataService : DataService) { }
 
  ngOnInit() {
  this.users = this.dataService.user;
  console.log(this.users);
  }
final_sports: any;
sports = [
  {
    id : 1,
    url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Muralitharan_bowling_to_Adam_Gilchrist.jpg/499px-Muralitharan_bowling_to_Adam_Gilchrist.jpg',
    sport_id : 1
   },
   {
     id : 2,
     url : 'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000342293828.jpg?strip=all&w=960&quality=100',
     sport_id : 2
   },
    {
    id : 3,
    url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaOJpc6o2mYOoK2oJDnrM7fu4GLdVi4tX2EUVOikncfQKuMDOkA',
    sport_id : 1
   },
   {
     id : 4,
     url : 'https://icc-static-files.s3.amazonaws.com/ICC/photo/2018/02/03/a4c308df-3ba3-4d42-ae04-e7def5d9ed45/Screen-Shot-2018-02-03-at-23.08.12.png',
     sport_id : 2
   },
   {
    id : 5,
    url : 'https://www.telegraph.co.uk/content/dam/tennis/2018/03/22/TELEMMGLPICT000152282469_trans_NvBQzQNjv4BqXKtvXxfgGlyLIacXfOoNihvqrsXDkqaJfakZA01nQng.jpeg?imwidth=450',
    sport_id : 3
   },
   {
     id : 6,
     url : 'https://static.toiimg.com/thumb/imgsize-329920,msid-64510444,width-650,resizemode-4/64510444.jpg',
     sport_id : 3
   }
]

showSport(id :Number ){
  if(id == 0){
    this.final_sports  =  this.sports;
  }else{
      for(let i=0 ; i <= this.sports.length ; i++ ){
        let sport = this.sports[i];
        if( id ==  sport.sport_id ){
          this.final_sports.push(sport);
        }
      }
  }
  this.sports = this.final_sports;
}


}
