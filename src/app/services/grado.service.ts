import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

//models
import { Grado } from '../models/grado';
// services
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class GradoService {

  private urlBase:string=""

  constructor(private http:HttpClient, private utils: UtilsService) {
    this.urlBase = environment.url;
  }


  getGrados():Observable<Grado>{
    return this.http.get(`${this.urlBase}/grado`, { headers: this.utils.getHeaders }).pipe(
      map( (response:any) => response as Grado),
      catchError( e => {
        return throwError;
      })
    );
  }
}
