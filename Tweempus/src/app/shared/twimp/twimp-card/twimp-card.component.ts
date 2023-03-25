import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Twimp } from '../model/twimp.model'

@Component({
  selector: 'tweempus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrls: ['./twimp-card.component.css']
})
export class TwimpCardComponent {
  @Input() twimp: Twimp | undefined
  @Output() eventoCard = new EventEmitter();

  changeFavorites = () => {
    this.eventoCard.emit(this.twimp)
  }

}
