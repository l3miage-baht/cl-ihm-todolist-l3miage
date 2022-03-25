import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

export interface User{
  readonly userId: string;
  readonly email: string;
  readonly photo?: string;
  readonly displayName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  user!: Observable<User>

constructor(public auth: AngularFireAuth) {
}

createUserWithGoogle(): void {
  this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

creatNewUser(email: string, pwd: string): Promise<any>{
  return new Promise(
    (resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(email, pwd).then(
        (r) => { resolve(r) },
        (error) => { reject(error) }
      )
    }
  )
}

signInUser(email: string, pwd: string): Promise<any>{
  return new Promise(
    (resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, pwd).then(
        (r) => { resolve(r) },
        (err) => { reject(err) }
      )
    }
  )
}

signOutUser(): Promise<void>{
  return this.auth.signOut()
}

}
