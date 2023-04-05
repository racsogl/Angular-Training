import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';

import {catchError, map} from 'rxjs';
import {Twimp} from "./model/twimp.model";
import {Author} from "../author/model/author.model";


@Injectable({
  providedIn: 'root'
})
export class TwimpService {


  private url: string = 'http://localhost:3000/twimps'
  private urlFavorite: string = 'http://localhost:3000/author-favorites'

  constructor(private httpClient: HttpClient) {
  }

  getTwimps(): Observable<Twimp[]> {
    return this.httpClient.get<any>(this.url).pipe(
      map(dbTwimpList => {
        let twimps: Twimp[] = [];
        for (let i in dbTwimpList) {
          const twimp: Twimp = new Twimp(
            dbTwimpList[i].id,
            'localhost:3000/twimps/' + dbTwimpList[i].id,
            new Author(dbTwimpList[i].author),
            dbTwimpList[i].content,
            dbTwimpList[i].timestamp);
          twimps.push(twimp)
        }
        return twimps

      }),
      catchError(this.handleError)
    )
  }

  getFavoritesByAuthor(idAuthor: string, idTwimp: string): Observable<boolean> {
    return this.httpClient.get(this.urlFavorite + '/' + idAuthor).pipe(
      map(response => true),
      catchError(this.handleError))
  }

  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return throwError(() => errMsg)
  }
}
