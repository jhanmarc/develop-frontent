import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { UtilsService } from './utils.service';

// models
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private urlBase:string=""

  constructor(private http:HttpClient, private utils: UtilsService) {
    this.urlBase = environment.url;
  }


  getPersons():Observable<Person>{
    return this.http.get(`${this.urlBase}/persona`, { headers: this.utils.getHeaders }).pipe(
      map( (response:any) => response as Person),
      catchError( e => {
        return throwError;
      })
    );
  }

  crearPerson(data:Person):Observable<any>{
    return this.http.post(`${this.urlBase}/persona`, data,{ headers: this.utils.getHeaders })
    .pipe(
      map( (response) => response),
      catchError( e => {
        return throwError;
      })
    );
  }


}
