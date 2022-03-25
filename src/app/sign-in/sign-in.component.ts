import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm!: FormGroup;
  msgError: string ='';

  constructor(
    private userAuthService: UserAuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(): void{
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit(): void{
    const EMAIL = this.signInForm.get('email')?.value;
    const PWD = this.signInForm.get('pwd')?.value;

    console.log("In commxion methode 00000000000")

    this.userAuthService.signInUser(EMAIL, PWD).then(
      () => {
        console.log("In commxion methode11111111");
        this.router.navigate(['/todo-list']);
      },

      (err) => { this.msgError = err }
    )
  }
}
