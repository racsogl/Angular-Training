import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // cuando el path es vacio que se vaya a home
    { path: 'home', component: HomeComponent }, // cuando en el path aparezca home
    { path: 'hello/:name', component: HelloComponent }, // solo se puede ir al componente Hello si le paso un nombre en la url hello/foo
    { path: 'homes', redirectTo:'/home', pathMatch: 'full'},
    { path: '**', component: ErrorComponent } // cuando entremos en una página que no exista en ninguna ruta

];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
