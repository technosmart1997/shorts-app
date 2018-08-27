import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { NodeService } from '../node.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private loginService : NodeService, private router : Router) {
    this.loginForm = new FormGroup({
      'username' : new FormControl('',Validators.required),
      'password' : new FormControl('',Validators.required),
      'tc' : new FormControl(false, Validators.required)
    }) 
   }

   loggedInUser : any;
   diplayMessage : string;
   successmessageBox : boolean = false;
   dangermessageBox : boolean = false; 

  ngOnInit() {

    
  }

  onLogin(){
    let user = this.loginForm.value;
    if(user.username == '' || user.username == null || user.username == undefined ){
      console.log('Please Enter Valid Credentials');
    }else{
       this.loginService.loginUser(user).then((res) => {
         this.loggedInUser = res;
        //  console.log(res);
         this.diplayMessage = this.loggedInUser.message;
         if(this.loggedInUser.status){
          this.successmessageBox = true;
      
          this.loginService.getCurUser(this.loggedInUser.token);
          
            
          setTimeout(() => {
            this.loginService.setToken(this.loggedInUser.token);
            this.router.navigate(['/dashboard']);
          }, 3000);
           
          }else{
            this.dangermessageBox = true;
            this.router.navigate(['/login']);
          }
      });
    }
  
  }


}
