import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthorService} from "../shared/author/author.service";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  canActivate() {
    if (this.authenticationService.token != null) {
      return true
    }
    this.router.navigate(['/login'])
    return false;
  }
}
