import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import {AuthGuardService} from "./auth-guard.service";


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  providers: [
    AuthGuardService
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    NavComponent
  ]
})
export class CoreModule { }
