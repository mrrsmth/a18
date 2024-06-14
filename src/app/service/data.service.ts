import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  stringSubject = new Subject<string>();
  numSub = new Subject<number>();
  userSub = new Subject<User>();

  constructor() {}

  passValue(data: string) {
    this.stringSubject.next(data);
  }

  passNum(num: number) {
    this.numSub.next(num);
  }

  passUser(user: User) {
    this.userSub.next(user);
  }
}
