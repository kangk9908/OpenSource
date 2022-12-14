// implementing auth guard
// Source "Use Route Guards to Protect Angular Routes" https://www.positronx.io/full-angular-firebase-authentication-system/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "../services/auth";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    public authService: AuthService,
    public router: Router
  ){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggedIn !== true) {
      this.router.navigate(['sign-in'])
    }
    return true;
  }
}