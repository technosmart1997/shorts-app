import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { NodeService } from '../node.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private LoginService: NodeService) {
    }

    canActivate(){
        if(this.LoginService.loggedIn()){
			return true;
		}else{
			this.router.navigate(['/login']);
			return false;
		}
    }
}