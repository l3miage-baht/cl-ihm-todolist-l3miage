import { Router } from '@angular/router';
import {  Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  // private subj = new Subject<firebase.auth.UserCredential | Promise<firebase.auth.UserCredential>>();
  // readonly observableFirebaseUser = this.subj.asObservable();


constructor(public auth: AngularFireAuth, private router: Router) {
}

createUserWithGoogle(): Promise<any> {
  return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
    (r) => {
      //this.subj.next(r);
      // console.log("#####################################################################################################")
      // console.log({r})
      // console.log("######################################################################################################")

    },
    // () => { console.log("error") }
  )

}

creatNewUser(email: string, pwd: string): Promise<any>{
  return new Promise(
    (resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(email, pwd).then(
        (r) => {
          //this.subj.next(r);
          resolve(r)
        },
        (error) => { reject(error) }
      )
    }
  )
}

signInUser(email: string, pwd: string): Promise<firebase.auth.UserCredential>{
  return new Promise(
    (resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, pwd).then(
        (r) => {
          //this.subj.next(r);
          resolve(r)
        },
        (err) => { reject(err) }
      )
    }
  )
}

signOutUser(): Promise<void>{
  return this.auth.signOut().then(
    () => { this.router.navigate(['/']) },
    (e) => {
      //console.log("Erreur lors de la deconnection => " +e);
      this.router.navigate(['/']);
    }
  )
}

}
