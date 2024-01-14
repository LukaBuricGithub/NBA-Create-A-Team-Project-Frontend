import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NbaServiceService } from 'src/services/nba-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardNbaGuard implements CanActivate {
  
  constructor(private service:NbaServiceService, private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.service.IsloggedIn())
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  
}
