import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from '../../service/data.service';
import { FormsModule, NgModel } from '@angular/forms';
import { SecondChildComponent } from '../second-child/second-child.component';
import { UserComponent } from '../user/user.component';
import { User } from '../../interface/user';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, SecondChildComponent, UserComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})

export class ParentComponent {
  appParent: string = 'appParent';
  hi = "Hello";
  myTextVal: string = 'mrrsmth';
  helloBro: string = 'Hello Bro';
  newUser: User = {
    name: 'BoboFet',
    age: 62
  }

  constructor(private data: DataService) {}


  sendTextValue(){
    this.data.passValue(this.myTextVal);
  }

  cleanTextValue() {
    this.myTextVal = '';
  }

  hiString(string: string) {
    this.appParent = string;
    console.log(this.hi)
  }
  
  getUser() {
    this.data.passUser(this.newUser);
  }

}
