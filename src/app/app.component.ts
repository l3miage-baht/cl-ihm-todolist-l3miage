import { TodolistService, TodoList, TodoItem } from './todolist.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'l3m-tpX-todolist-angular-y2022';

  constructor(private todoListService: TodolistService){
  }

  get ObsTodoService(): Observable<TodoList>{
    return this.todoListService.observable;
  }

  submitForm(v: string): void{
    this.todoListService.create(v);
    console.log("V en param est : "+ v);

    console.log("Formulaire soumi ");
    console.log(this.todoListService);
  }

  update(data: Partial<TodoItem>, ...items: readonly TodoItem[]): void{
    this.todoListService.update(data, ...items);
  }

  delete(item: TodoItem): void{
    this.todoListService.delete(item);
  }

  trackById(n: number, i: TodoItem): number{
    return i.id;
  }
}
