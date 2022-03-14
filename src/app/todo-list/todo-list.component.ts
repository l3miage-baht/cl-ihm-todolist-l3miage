import { Observable } from 'rxjs';
import { TodolistService, TodoList, TodoItem } from './../todolist.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  readonly ObsTodoService: Observable<TodoList>

  constructor(private todoListService: TodolistService) {
    this.ObsTodoService = this.todoListService.observable;
  }

  ngOnInit(): void {
  }
  // create(...labels: readonly string[])
  addTask(...v: readonly string[]): void{
    this.todoListService.create(...v);
    console.log("I'm in add task " + v);

  }

  delete(...items: readonly TodoItem[]): void{
    this.todoListService.delete(...items);
  }

  update(data: Partial<TodoItem>, ...items: readonly TodoItem[]): void{

    this.todoListService.update(data, ...items);
  }

  // get ObsTodoService(): Observable<TodoList>{
  //   return this.todoListService.observable;
  // }

}
