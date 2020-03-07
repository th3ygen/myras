import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { MasterService } from '../services/master.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private master: MasterService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.auth.currentUserValue;
    const role = next.data.role;

    if (user) {
      /* if (role === 'admin') {
        return user.admin;
      } */

      this.master.setUserUI(true);
      return true;
    }

    this.master.setUserUI(false);
    this.router.navigate(['/login']);

    return false;
  }

}
