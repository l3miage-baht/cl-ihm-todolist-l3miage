import { UserAuthService } from './../user-auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, tap, BehaviorSubject, switchMap, Subject, combineLatest, map } from 'rxjs';
import { TodolistService, TodoList, TodoItem } from './../todolist.service';
import { Component, OnInit, ChangeDetectionStrategy, Type } from '@angular/core';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class TodoListComponent implements OnInit {

  readonly ObsTodoService: Observable<TodoList>
  //readonly UbsFirebaseUserService: Observable<firebase.auth.UserCredential | Promise<firebase.auth.UserCredential>>

  ObsTodoServiceFiltered = new BehaviorSubject<TodoList>({label: 'L3 MIAGE', items: [] });
  ObsTodoServiceState = new BehaviorSubject<string>('filterAll');

  constructor(private todoListService: TodolistService, public firebaseUserAuthService: UserAuthService) {
    console.log("Constructeur todo list ***********************************")
    // this.UbsFirebaseUserService = this.us.observableFirebaseUser;
    // this.UbsFirebaseUserService.pipe(map(u => console.log("&&&&&&&&&&&&&&&&&&&&&&&&&& " +u)))

    this.ObsTodoService = this.todoListService.observable;

    combineLatest([this.ObsTodoService, this.ObsTodoServiceState]).pipe(
      map(([OTSFiltered, OTLSate]) => {
        if(OTLSate === "filterActives"){
          return OTSFiltered.items.filter(item => item.isDone === false)
        }else if (OTLSate === "filterCompleted"){
          return OTSFiltered.items.filter(item => item.isDone === true)
        }else if(OTLSate === "deleteChecked"){
          return OTSFiltered.items.filter(i => i.isDone === true ? this.delete(i) : i)
        }else{
          return OTSFiltered.items.filter(item => item)
        }
      })
    ).subscribe( (i) => { this.ObsTodoServiceFiltered.next({label: 'L3 MIAGE', items: i})   })

  }

  ngOnInit(): void {
  }

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

  setFilterState(state: string): void{
    this.ObsTodoServiceState.next(state)
  }

  trackById(n: number, i: TodoItem): number{
    return i.id
  }

}
