import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interface/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  stringSubject$ = new Subject<string>();
  numSub$ = new Subject<number>();
  userSub$ = new Subject<User>();
  url ='https://jsonplaceholder.typicode.com/todos/1';
  constructor(private http: HttpClient) {}

  passValue(data: string) {
    this.stringSubject$.next(data);
  }

  passNum(num: number) {
    this.numSub$.next(num);
  }

  passUser(user: User) {
    this.userSub$.next(user);
  }

  getJson() {
   return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}

