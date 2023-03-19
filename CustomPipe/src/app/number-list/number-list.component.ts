import { Component } from '@angular/core';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent {
  number : string = '658956886'
  pi: number = 3.14159265358979323846
  cadena = "Angular"
  array = [1,2,3]
  price = 23.2
  today: number = Date.now()
}
