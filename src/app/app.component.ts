import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TodolistService, TodoList, TodoItem } from './todolist.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {



  title = 'l3m-tpX-todolist-angular-y2022';

  constructor(
    private todoListService: TodolistService,
    private auth: AngularFireAuth,
    private userAuthService: UserAuthService,
    private formBuilder: FormBuilder,
    private router: Router
    ){
  }

  ngOnInit(): void {
      // this.auth.onAuthStateChanged(
      //   (user) => { user ? this.isAuth = true : this.isAuth = false }
      // )
  }

  ngOnDestroy(): void {
    this.fillLocalStorage()
  }

  get ObsTodoService(): Observable<TodoList>{
    return this.todoListService.observable;
  }


  fillLocalStorage(): void{
    this.ObsTodoService.subscribe((TDS) => {
      localStorage.setItem('TODO', JSON.stringify(TDS))
      //localStorage.getItem('TODO')
      // JSON.parse(localStorage.getItem('TODO'))
    })
  }

  submitForm(v: string): void{
    this.todoListService.create(v);
    console.log("V en param est : "+ v);

    console.log("Formulaire soumi ");
    console.log(this.todoListService);
    this.fillLocalStorage()
  }

  update(data: Partial<TodoItem>, ...items: readonly TodoItem[]): void{
    this.todoListService.update(data, ...items);
    this.fillLocalStorage();
  }

  delete(item: TodoItem): void{
    this.todoListService.delete(item);
    this.fillLocalStorage();
  }

  trackById(n: number, i: TodoItem): number{
    return i.id;
  }
}
