import { Component, OnInit } from '@angular/core';
import { NodeService } from '../node.service';
import { Router } from '@angular/router';

import { sharedService } from '../sharedservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
 
})
export class ProfileComponent implements OnInit {

  userData;
  
  constructor(private userService : NodeService, private  router : Router, private shared : sharedService) { 

      // this.shared.callMethodOfSidebarComponent(); 
    
  }
  


  ngOnInit() {
    this.userData = this.userService.getdatafromStorage();
    console.log(this.userData);
  }

  
 



  testing(){
    console.log('Tested');
  }

  }

