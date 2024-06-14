import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-second-child',
  standalone: true,
  imports: [],
  templateUrl: './second-child.component.html',
  styleUrl: './second-child.component.scss'
})
export class SecondChildComponent {
  constructor(private data: DataService) {}
  numSub: number = 2024;

  ngOnInit() {
    this.valNum();
    this.sendNumValue();
  }

  sendNumValue(){
    this.data.passNum(this.numSub);
  }

  valNum() {
    this.data.numSub$.subscribe(num => {
      this.numSub = num;
      console.log(num);
    })
  }
}
