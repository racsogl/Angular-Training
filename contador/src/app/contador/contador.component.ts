import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  // el valor de la variable valorContador nos lo va a dar un componente externo a mayores tambien lo utilizamos en la plantilla html y lo mostramos
  @Input() valorContador: number = 0
  @Output() eventContador = new EventEmitter()

  incrementar() {
    // con este incrementamos el valor que nos manda el componente raiz internamente en el componente contador, pero no modifica el appvalor del componente raiz
    // para eso sacamos afuera la modificación con un Output y lo emitimos al componente que este escuchando este evento
    this.valorContador++
    this.emitValorContador()
  }

  decrementar() {
    // con esto decrementamos el valor que nos manda el componente raiz internamente en el componente contador, pero no modifica el appvalor del componente raiz,
    // para eso sacamos afuera la modificación con un Output y lo emitimos al componente que este escuchando este evento
    this.valorContador--
    this.emitValorContador()
  }

  resetContador() {
    this.valorContador = 0
    this.emitValorContador()
  }

  updateValorContador(valorContador: string) {
    this.valorContador = Number(valorContador);
    this.emitValorContador()
  }

  updateValorContador2(event: any) {

    this.valorContador = event.target.value
    this.emitValorContador()
   // alert((event.target as HTMLInputElement).value);
  }

  private emitValorContador() {
    this.eventContador.emit(this.valorContador)
  }

}
