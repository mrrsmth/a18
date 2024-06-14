import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  myName: string = 'Alx';
  @Input() string: string = 'string';
  @Output() onChange = new EventEmitter<string>();
  

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.stringSubject.subscribe(
      data => 
      {
        console.log('next subscribed value: ' + data);
        this.myName = data;
      }
    );
  }
  
  buttonClicked() {
    console.log('Click!');
    let text: string = 'Hi!';
    this.onChange.emit(this.myName);
  }

}
