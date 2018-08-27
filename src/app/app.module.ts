import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// import { FileUploadModule } from 'ng2-file-upload';
import { FileSelectDirective } from "ng2-file-upload"; 

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';


import { AuthGuard } from "./guards/auth.guard";
import { AntiAuthGuard } from './guards/antiauth.guard';

import { DataService } from './data.service';
import { sharedService } from './sharedservice.service';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeDefaultComponent } from './home-default/home-default.component';
import { NewsPortalComponent } from './news-portal/news-portal.component';
import { AboutComponent } from './about/about.component';


// Services 
import { NewsService } from './news.service';
import { NodeService } from './node.service';
import { ProfileComponent } from './profile/profile.component';



const approute : Routes = [
  { path : "" , component : HomeComponent, children : [
    { path : "", component : HomeDefaultComponent},
    { path : 'login', component : LoginComponent},
    { path : 'register' , component : RegisterComponent}
  ], canActivate: [AntiAuthGuard]},

  { path : "dashboard", component : DashboardComponent, children : [
    { path : 'newsportal' , component : NewsPortalComponent },
    { path : 'about' , component : AboutComponent },
    { path : 'profile' ,component : ProfileComponent}
  ],canActivate : [AuthGuard]}
];
 
@NgModule({
  declarations: [
    // FileSelectDirective,
    // FileDropDirective,
    AppComponent,
    FileSelectDirective,
    SidebarComponent,
    ContentComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeDefaultComponent,
    NewsPortalComponent,
    AboutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    // FileUploadModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approute)
  ],
  providers: [DataService,NewsService,NodeService,AuthGuard,AntiAuthGuard,sharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
