import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { NodeService } from '../node.service';

@Injectable()
export class AntiAuthGuard implements CanActivate {
    constructor(private router: Router, private LoginService: NodeService) {
    }

    canActivate(){
        if(this.LoginService.loggedIn()){
			this.router.navigate(['/dashboard']);
			return false;
		}else{
			return true;
		}
    }
}