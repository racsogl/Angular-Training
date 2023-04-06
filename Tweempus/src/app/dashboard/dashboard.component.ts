import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../shared/author/author.service';
import {Twimp} from "../shared/twimp/model/twimp.model";
import {TwimpService} from "../shared/twimp/twimp.service";
import { from } from "rxjs";


@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  twimpList: Twimp[] = []

  constructor(
    private authorService: AuthorService,
    private twimpService: TwimpService){}

  ngOnInit(): void {
    this.twimpService.getTwimps().subscribe(twimps => {
      from(twimps).subscribe(twimp => {
        this.authorService.getAuthor(twimp.author.id).subscribe(author => {
          twimp.author =  author
          this.twimpService.getFavoritesByAuthor('1', twimp.id).subscribe(favorite => {
            twimp.favorite = favorite
            this.twimpList.push(twimp)
          })
        })
      })
    })


    //this.twimpService.getTwimps().subscribe(twimps => this.twimpList = twimps);
    //this.authorService.getAuthor('1').subscribe(author => console.log(author))
  }

}
