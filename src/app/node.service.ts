import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class NodeService {


  profileImageUrl : string;
  baseurl : string = '../../assets/profile_images/';
  main_user_object : any;
  current_user;   
  username;  
  user_info;   // Complete User Data
  current_user_token;  // User Token
  constructor(private _http : Http) { 
      this.profileImageUrl = this.baseurl + JSON.parse(localStorage.getItem('user')).image_url;
  }

  setToken(token){
      this.current_user_token = token;
      localStorage.setItem('token', token);    
  }

  loginUser(user){
    // console.log(user);
    return new Promise((resolve, reject)=>{
      return this._http.post('/api/authenticate', user).subscribe(res => {
        // console.log(res);
        this.current_user= res;
        this.current_user= this.current_user._body;
        this.current_user =JSON.parse(this.current_user);

        resolve(this.current_user);
      })
    })
  }

    getCurUser(token){
    
      let header = new Headers();
      header.append('Authorization',token);
     
      this._http.get('/api/me',{ headers : header }).subscribe(res => {

          let user = res.json();
          // console.log(user.user);
         this.setImageUrl(user.user.image_url);
          localStorage.setItem('user', JSON.stringify(user.user));
      });

     }

     setImageUrl(url){
      this.profileImageUrl = this.baseurl + url;
     }
  
     getImageUrl(){
      //  console.log(this.profileImageUrl);
       return this.profileImageUrl;
     }

  storeUser(res){
    this.user_info = res.user;
    console.log(this.user_info);
    // console.log(this.user_info);
     localStorage.setItem('user',JSON.stringify(res.user));
  }

  getdatafromStorage(){
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

    getusername(){
      const user = JSON.parse(localStorage.getItem('user'));
      return user.username;
    }
  

  loggedIn() {
    return tokenNotExpired();
  }

  logout(){

    localStorage.clear();
  }

  fileUpload(formData){

    let username = this.getusername();
    let header = new Headers();
      header.append('username',username);
    // console.log(formData);
     this._http.post('/api/image-upload', formData, { headers : header}).subscribe(res => {
       let user = res.json();
       this.storeUser(user);
      console.log(user);
       let newurl = user.user.image_url;

       this.setImageUrl(newurl);
      
     });
  }

}
