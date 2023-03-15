import { Component } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {

  //pruebaDePaso: String = "prueba"

  save() {
    console.log('save')
  }

}
