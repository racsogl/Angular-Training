import { Component, OnInit } from '@angular/core';

import { Author } from '../../author/model/author.model'
import { Twimp } from '../model/twimp.model'

@Component({
  selector: 'tweempus-twimp-list',
  templateUrl: './twimp-list.component.html',
  styleUrls: ['./twimp-list.component.css']
})

export class TwimpListComponent implements OnInit {
  private authors: Author[] = [];
  twimps: Twimp[] = [];

  private text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur sodales libero, sit amet posuere arcu consectetur ut. Nam volutpat ligula ac nunc consectetur vestibulum.'

  ngOnInit() {
    this.authors.push(new Author('1'))
    this.twimps.push(new Twimp('1', '', this.authors[0], this.text, '01/01/2000'))
    this.twimps.push(new Twimp('2', '', this.authors[0], this.text, '01/01/2000'))
    this.twimps.push(new Twimp('3', '', this.authors[0], this.text, '01/01/2000'))
    this.twimps.push(new Twimp('4', '', this.authors[0], this.text, '01/01/2000'))
  }

  listenerFavorite(twimpRef: Twimp) {
    let position = this.twimps.findIndex(twimp => twimp.id == twimpRef.id);
    this.twimps[position].favorite = !twimpRef.favorite
  }

  trackByTwips(index: number, twimp: Twimp) {
    // alert(`TrackByTwinps -> the index is -> ${index}`)
    return twimp.id
   }

}
