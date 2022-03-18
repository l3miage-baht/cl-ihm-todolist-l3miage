import { Observable, tap, BehaviorSubject } from 'rxjs';
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
  ObsTodoServiceFiltered = new BehaviorSubject<TodoList>({label: 'L3 MIAGE', items: [] });

  constructor(private todoListService: TodolistService) {
    this.ObsTodoService = this.todoListService.observable;

    this.ObsTodoService.subscribe((TDS) => {
      this.ObsTodoServiceFiltered.next(TDS)
    })

    this.ObsTodoServiceFiltered

  }

  ngOnInit(): void {
  }
  // create(...labels: readonly string[])
  addTask(...v: readonly string[]): void{
    this.todoListService.create(...v);
    //console.log("I'm in add task " + v);
  }

  delete(...items: readonly TodoItem[]): void{
    this.todoListService.delete(...items);
  }

  update(data: Partial<TodoItem>, ...items: readonly TodoItem[]): void{
    this.todoListService.update(data, ...items);
  }

  restantes(items: readonly TodoItem[]): number{
    return items.filter( item => item.isDone === false ).length
  }

  filterAllItems(items: readonly TodoItem[]): void{

  }

  filterActivesItems(items: readonly TodoItem[]): void{
    items.filter(item => item.isDone === false)
  }

  filterCompletedItems(): void{
    //const fConpleteItems = this.ObsTodoService.subscribe((TDL) => {
      //console.log(TDL.items.filter(item => item.isDone === true))
   // })
  }


}
