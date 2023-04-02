import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs';

import { Author } from './model/author.model';

@Injectable(
 // {
  // providedIn: 'root'
// }
)
export class AuthorService {

  private url: string = 'http://localhost:3000/authors'

  constructor(private httpClient: HttpClient) { }

  getAuthor(id: string): Observable<Author> {
    let author: Author | null = null;

    // pipe -> gestiona las llamadas rjx
    return this.httpClient.get<Author>(this.url + '/' + id).pipe(
      map(dbAuthor =>  {
        author = new Author(dbAuthor.id);
        author.fullName = dbAuthor.fullName;
        author.image = dbAuthor.image
        author.url = 'http://localhost:4200/author/' + dbAuthor.id
        return author
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return throwError(() => errMsg)
  }
}
