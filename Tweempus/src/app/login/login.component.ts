import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

import {AuthenticationService} from "../core/authentication.service";
import {AuthorService} from "../shared/author/author.service";

@Component({
  selector: 'tweempus-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // formulario
  userForm!: FormGroup
  userNoExist: boolean = false

  constructor(
    private authService: AuthenticationService,
    private authorService: AuthorService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      idAuthor: ['', Validators.required]
    })
  }

  login(userForm: FormGroup) {
    if (this.userNoExist) {
      this.userNoExist = false
    }
    this.authorService.getAuthor(this.userForm?.value.idAuthor).subscribe(
      author => this.authService.login(this.userForm?.value.idAuthor),
      error => this.userNoExist = true
    )
  }

}
