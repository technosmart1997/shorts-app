import { Component, OnInit,ViewChild} from '@angular/core';
import { NodeService } from '../node.service';
import { Router } from '@angular/router';
import { sharedService } from '../sharedservice.service';
import { FileUploader} from 'ng2-file-upload/ng2-file-upload';
import { DomSanitizer } from '@angular/platform-browser';

const URL = 'http://localhost:3000/api/image-upload';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public uploader : FileUploader = new FileUploader({ url: URL, itemAlias : 'avatar'});

  imageFile : Array<File> = [];
  newimageurl : string;
  cur_user;
  displayname;
  image_src: string ;
  updatedimagesrc : string;
  display : string;
  localImageUrl : string;

  constructor(private sanitizer : DomSanitizer,private userService : NodeService, private router :Router, private shared : sharedService) {
      
  }


  fileuploaderFileChange(files: FileList){
      console.log(files);
  }


  ngOnInit() {
  
    this.displayname = JSON.parse(localStorage.getItem('user')).name;
    

  //   this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {

  //     console.log("ImageUpload:uploaded:", item, status, response);
  //  }


   this.uploader.onAfterAddingFile = (fileItem) => {
       let url = (window.URL) ? window.URL.createObjectURL(fileItem._file) : (window as any).webkitURL.createObjectURL(fileItem._file);
    this.localImageUrl = url;

 console.log(this.localImageUrl);
  }

  }
  onFileSelected(event){
    this.imageFile = event.target.files;
  }


  onLogout(){
    this.userService.logout();
    this.router.navigate(['/login']);
    console.log(this.userService.loggedIn());
  }

}
