import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

constructor(private auth: AngularFireAuth, private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //throw new Error('Method not implemented.');
    return new Promise(
      (resolve, reject) => {
        this.auth.onAuthStateChanged(
          (U) => {
            if(U){
              resolve(true)
            }else{
              this.route.navigate(['/'])
              resolve(false)
            }
          }
        )
      }
    )
  }

}
