import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwimpService {

  constructor() { }
}
