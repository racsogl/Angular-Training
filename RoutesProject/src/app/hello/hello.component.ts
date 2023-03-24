import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name!: string

  // utilizamos spanpshot para obtener el dato de la url, utilizamos snapshot -> nunca vamos a estar moviéndonos por componentes iguales
  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  constructor(
    private route: ActivatedRoute, private router: Router
  ) { }

  onClick(name: string) {

    this.router.navigate(['/hossmes']);

   }

}
