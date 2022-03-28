import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { TodolistService } from './../todolist.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  isAuth = false;
  authForm!: FormGroup;
  msgError: string ='';

  constructor(
    private todoListService: TodolistService,
    private auth: AngularFireAuth,
    private userAuthService: UserAuthService,
    private formBuilder: FormBuilder,
    private router: Router
    ){
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void{
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit(): void{
    const EMAIL = this.authForm.get('email')?.value;
    const PWD = this.authForm.get('pwd')?.value;

    console.log("In commxion methode 00000000000")

    this.userAuthService.signInUser(EMAIL, PWD).then(
      () => {
        console.log("In commxion methode11111111");
        this.router.navigate(['/todo-list']);
      },

      (err) => { this.msgError = err }
    )
  }

  loginWithGoogle(): void {
    this.userAuthService.createUserWithGoogle().then(
      (r) => { this.router.navigate(['/todo-list']) },
      (e) => { this.msgError = "Erreur de login avec google : " +e }
    )
  }

  // logout() {
  //   this.auth.signOut();
  // }

  // onSignOut(): void{
  //   this.userAuthService.signOutUser()
  // }


}
