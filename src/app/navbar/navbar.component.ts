import { Component, OnInit } from '@angular/core';
import { NodeService } from '../node.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private loginService : NodeService, private router : Router) { }

  ngOnInit() {
     
  }
  
   
  onLogout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
    console.log(this.loginService.loggedIn());
  }
  

}
