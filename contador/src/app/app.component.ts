import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';
  // valor componente raiz
  appValor: number = 3

  eventListener(event: number) {
    this.appValor = event
  }
}
