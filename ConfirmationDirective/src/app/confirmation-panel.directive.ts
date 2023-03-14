import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmationPanel]'
})
export class ConfirmationPanelDirective {
  // para solucionar lo de que si no confirmamos no se ejecute el save
  // input con alias confirm
  @Input('confirm') execFunction!: Function

  // se queda escuchando al evento click y le pasamos el evento
  // el evento HostListener ejecuta la función asociada al evento definido dentro del listener
  // esa función sera aquella al que este modificando el decorado,
  // esta función se va ejecutar cada vez que tengamos un click sobre el evento que implementa esta directiva
  @HostListener('click', ['$event'])
  onClick() {
    const confirmed = window.confirm('Are you sure?')

    if (confirmed) { // ejecutamos la función que nos han pasado
      this.execFunction
    }
  }

}
