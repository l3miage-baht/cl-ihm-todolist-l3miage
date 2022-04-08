import *  as firebase from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Injectable, OnDestroy, Type } from '@angular/core';
import { BehaviorSubject, map, switchMap, of, combineLatest, shareReplay } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore';


export interface TodoItem {
  readonly label: string;
  readonly isDone: boolean;
  readonly id: number;
  //readonly idFirebase?: number;
}

export interface TodoList {
  readonly label: string;
  readonly items: readonly TodoItem[];
}


// Type TodoListState = {user: undefined}
//                           | {user: firebase.User, TDL: TodoList};

// type TodoListState{
//   user: firebase.User;
//   TDL: {label: string; items: never[];} | {user: string; TDL?: undefined;}
// }

//type TodoListState = { user: undefined } | { user: firebase.User, TDL: TodoList };

let idItem = 0;

@Injectable({
  providedIn: 'root'
})
export class TodolistService implements OnDestroy {

  // readonly observablee: Observable<TodoListState>;
  //private state: TodoListState = {user: undefined};
  //private subscriptionState: Subscription;

  private subj = new BehaviorSubject<TodoList>({label: 'L3 MIAGE', items: [] });
  readonly observable = this.subj.asObservable();

  //sub: Subscription;
  //iitems: TodoList[] = [];

  // -------------------------******************************--------------------------
  // private todolistCollection: AngularFirestoreCollection<TodoList>
  // private obs: Observable<TodoList[]>
  // -------------------------******************************--------------------------

  constructor(private afs: AngularFirestore, private afa: AngularFireAuth) {

    this.readAllFromFirebase()



    // this. sub = this.readAllFromFirebase().subscribe(
    //   (d) => {
    //     this.iitems = d.map(e => {

    //       const T = {
    //         idFirebase: e.payload.doc.id,
    //         ...e.payload.doc.data()
    //       } as TodoItem
    //       console.log('T valuuuuue is ::: ' + JSON.stringify(T));

    //       return T
    //     })
    //   }
    // )

    // this.todolistCollection = this.afs.collection<TodoList>('TodoList')
    // this.obs = this.todolistCollection.valueChanges(['added', 'removed', 'modified']);
    // this.afs.collection<TodoList>('TodoList').ref.firestore
    // console.log('rrrr ' + this.afs.collection<TodoList>('TodoList').doc())

  }

  ngOnDestroy(): void {
    this.subj.unsubscribe()
    //this.readAllFromFirebase().unsubscribe
  }

  create(...labels: readonly string[]): this {
    const L: TodoList = this.subj.value;
    const T = {
      ...L,
      items: [
        ...L.items,
        ...labels.filter( l => l !== '').map(
            label => ({label, isDone: false, id: idItem++})
          )
      ]
    }
    ////this.subj.next( I );


    this.afa.authState.pipe(
      switchMap(U => this.afs.doc<TodoList>(`${U?.uid}/default`).set(T, {merge: true}))
    ).subscribe()
    this.readAllFromFirebase()


    return this;
  }

  delete(...items: readonly TodoItem[]): this {
    const L = this.subj.value;
    const T = {
      ...L,
      items: L.items.filter(item => items.indexOf(item) === -1 )
    }
    //// this.subj.next(T);

    this.afa.authState.pipe(
      switchMap(U => this.afs.doc<TodoList>(`${U?.uid}/default`).set(T, {merge: true}))
    ).subscribe()
    this.readAllFromFirebase()

    return this;
  }

  update(data: Partial<TodoItem>, ...items: readonly TodoItem[]): this {
    const L = this.subj.value;
    if(data.label !== "") {
      // const L = this.subj.value;
      const T = {
        ...L,
        items: L.items.map( item => items.indexOf(item) >= 0 ? {...item, ...data} : item )
      }
      this.afa.authState.pipe(
        switchMap(U => this.afs.doc<TodoList>(`${U?.uid}/default`).set(T, {merge: true}))
      ).subscribe()
      //// this.subj.next(T);
    } else {
      this.delete(...items);
    }

    this.readAllFromFirebase()
    return this;
  }

 readAllFromFirebase(){

  combineLatest([
    this.afa.authState,
    this.afa.authState.pipe(
     switchMap( U => {
       if(U){
         //console.log("user U is not null");

         return this.afs.doc<TodoList>(`${U.uid}/default`).valueChanges().pipe(
           map( t => t ?? {label: "Default", items: []})
         );
       }else{
         //console.log("user U is false");

         return of({label: "unlogged", items: []})
       }
     })
   )
  ]).pipe(
    map(([user, TDL]) => !!user ? {user, TDL} : {user: "undefined"}),
    shareReplay(1),
    // distinctUntilChanged(),
    // shareReplay()
  ).subscribe(S =>  {
    //console.log(S.TDL);
    this.subj.next(S.TDL as TodoList)
  })
  //  this.observablee = combineLatest([
  //    this.afa.authState,
  //    this.afa.authState.pipe(
  //     switchMap( U => {
  //       if(U){
  //         console.log("user U is not null");

  //         return this.afs.doc<TodoList>(`${U.uid}/default`).snapshotChanges().pipe(
  //           map( t => t ?? {label: "Default", items: []})
  //         );
  //       }else{
  //         console.log("user U is false");

  //         return of({label: "unlogged", items: []})
  //       }
  //     })
  //   )
  //  ]).pipe(
  //    map(([user, TDL]) => !!user ? {user, TDL} : {user: "undefined"}),
  //    shareReplay(1)
  //  ).subscribe(S => this.state = S)
  //***********************************************************************************************OK */


    // this.afa.authState.pipe(
    //   switchMap( U => {
    //     if(U){
    //       console.log("user U is not null");

    //       return this.afs.collection<TodoList>(`/${U.uid}/default`).snapshotChanges().pipe(
    //         map( t => t ?? {label: "Default", items: []})
    //       );
    //     }else{
    //       console.log("user U is false");

    //       return of({label: "unlogged", items: []})
    //     }
    //   })
    // )
    //--------------------**---------------------*//----------------
    // return this.afs.collection<TodoList>('sqCFh8b7J8WZB5rnHBtud2Q5VGb2').snapshotChanges().subscribe(
    //   (d) => {
    //     this.iitems = d.map(e => {

    //       const T = {
    //         //idDocument: e.payload.doc.id,
    //         ...e.payload.doc.data()
    //       } as TodoList
    //       console.log('T valuuuuue is ::: ' + JSON.stringify(T));

    //       return T
    //     })
    //   }
    // )
  }

  // saveToFirebase(item: TodoItem){
  //   return this.afs.collection<TodoItem>("TodoList").add(item).then(
  //     (d) => { console.log("Data to Save ::::  "+ d) },
  //     (e) => { console.log("Data to Save Err::::  "+ e) }

  //   )



    // this.todolistCollection = this.afs.collection<TodoList>('TodoList');
    // this.obs = this.todolistCollection.valueChanges();

    //setDoc(DOCUMENT, L)
    // this.observable.pipe(
    //   map(tdl => tdl)

    // ).subscribe(t => {
    //   //deleteDoc(doc(collection(this.firestore, 'TodoList')))
    //   setDoc(doc(collection(this.firestore, 'TodoList')), t)
    // })

//   }

 }
