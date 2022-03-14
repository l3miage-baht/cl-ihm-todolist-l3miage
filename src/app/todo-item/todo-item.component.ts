import { TodoItem, TodolistService } from './../todolist.service';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

//   @Input() todoItem: TodoItem = {
//     label: '',
//     isDone: false,
//     id: 0
//  };
  @Input() todoItem!: TodoItem;
  @Output() update = new EventEmitter<Partial<TodoItem>>();
  @Output() remove = new EventEmitter<TodoItem>();

  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  // delete(item: TodoItem): void{
  //   console.log('hehehe :: '+ JSON.stringify(item));
  //   this.remove.emit(item);
  //   //this.todoListService.delete(item);
  // }

}
