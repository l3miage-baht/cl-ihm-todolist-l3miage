import { deleteDoc, doc } from 'firebase/firestore';

import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap, switchMap, take, share } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';


export interface TodoItem {
  readonly label: string;
  readonly isDone: boolean;
  readonly id: number;
}

export interface TodoList {
  readonly label: string;
  readonly items: readonly TodoItem[];
}

let idItem = 0;

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  private subj = new BehaviorSubject<TodoList>({label: 'L3 MIAGE', items: [] });
  readonly observable = this.subj.asObservable();

  // -------------------------******************************--------------------------
  private todolistCollection: AngularFirestoreCollection<TodoList>
  private obs: Observable<TodoList[]>
  // -------------------------******************************--------------------------

  constructor(private afs: AngularFirestore, private firestore: Firestore) {

    this.todolistCollection = this.afs.collection<TodoList>('TodoList');
    this.obs = this.todolistCollection.valueChanges();



    // this.obs.forEach((o)=> {
    //   this.subj.next(o[0])
    //   console.log('popopo ' + o[0])
    // })

    // this.obs.subscribe(
    //   e => e.forEach(console.log)
    // )

    // const COLLECTION = collection(firestore, 'TodoList');
    // this.obs = collectionData(COLLECTION)

    // console.log('Coolection values :: ' + collectionData(COLLECTION).subscribe(
    //   e => e.forEach(console.log)
    // ))

  }

  create(...labels: readonly string[]): this {
    const L: TodoList = this.subj.value;
    this.subj.next( {
      ...L,
      items: [
        ...L.items,
        ...labels.filter( l => l !== '').map(
            label => ({label, isDone: false, id: idItem++}),
          )
      ]
    } );
    this.saveToFirebase()
    return this;
  }

  delete(...items: readonly TodoItem[]): this {
    const L = this.subj.value;
    this.subj.next( {
      ...L,
      items: L.items.filter(item => items.indexOf(item) === -1 )
    } );
    //this.saveToFirebase()

    return this;
  }

  update(data: Partial<TodoItem>, ...items: readonly TodoItem[]): this {
    const L = this.subj.value;
    if(data.label !== "") {
      // const L = this.subj.value;
      this.subj.next( {
        ...L,
        items: L.items.map( item => items.indexOf(item) >= 0 ? {...item, ...data} : item )
      } );
    } else {
      this.delete(...items);
    }
    //this.saveToFirebase()
    return this;
  }


  saveToFirebase(): void{
    // this.todolistCollection = this.afs.collection<TodoList>('TodoList');
    // this.obs = this.todolistCollection.valueChanges();




    //setDoc(DOCUMENT, L)
    // this.observable.pipe(
    //   map(tdl => tdl)

    // ).subscribe(t => {
    //   //deleteDoc(doc(collection(this.firestore, 'TodoList')))
    //   setDoc(doc(collection(this.firestore, 'TodoList')), t)
    // })

  }

}
