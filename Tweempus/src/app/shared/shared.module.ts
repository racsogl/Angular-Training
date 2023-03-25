import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimp/twimp-list/twimp-list.component';
import { AuthorCardComponent } from './author/author-card/author-card.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    TwimpCardComponent,
    TwimpListComponent,
    AuthorCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TwimpListComponent,
    AuthorCardComponent,
    RouterModule
  ]
})
export class SharedModule { }
