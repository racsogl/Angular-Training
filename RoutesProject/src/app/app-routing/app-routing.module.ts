import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { HelloComponent } from '../hello/hello.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // cuando el path es vacio que se vaya a home
  { path: 'home', component: HomeComponent }, // cuando en el path aparezca home
  { path: 'hello/:name', component: HelloComponent }, // solo se puede ir al componente Hello si le paso un nombre en la url hello/foo
  { path: 'homes', redirectTo:'/home', pathMatch: 'full'},
  { path: '**', component: ErrorComponent } // cuando entremos en una página que no exista en ninguna ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
