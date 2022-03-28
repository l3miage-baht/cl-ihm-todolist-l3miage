
import { UserAuthService } from './../user-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  msgError: string = '';

  constructor(
    private userAuthService: UserAuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(): void{
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit(): void{
    const email = this.signUpForm.get('email')?.value;
    const pwd = this.signUpForm.get('pwd')?.value;

    this.userAuthService.creatNewUser(email, pwd).then(
      () => { this.router.navigate(['/todo-list']) },
      (err) => { this.msgError = err }
    )
  }

  loginWithGoogle(): void {
    this.userAuthService.createUserWithGoogle().then(
      (r) => { this.router.navigate(['/todo-list']) },
      (e) => { this.msgError = "Erreur de login avec google : " +e }
    )
  }

}
