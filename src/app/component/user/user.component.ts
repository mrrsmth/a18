import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../interface/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  startUser: User = {
    name: '-----',
    age: 0
  }

  constructor(private data: DataService) {}

  ngOnInit() {
    this.subUser();
  }

  subUser() {
    this.data.userSub.subscribe(user => {
      this.startUser = user;
    })
  }

}
