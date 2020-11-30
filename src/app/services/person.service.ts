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

  // crearPerson(data:Person):Observable<any>{
  //   return this.http.post(`${this.urlBase}/persona`, data,{ headers: this.utils.getHeaders })
  //   .pipe(
  //     map( (response) => response),
  //     catchError( e => {
  //       return throwError;
  //     })
  //   );
  // }

  crearPerson(data:Person) {
    const url = this.urlBase;
    const { nom_persona, ape_pate_persona, ape_mate_persona, nid_grado, fecha_naci, files } = data
    return new Promise(function (resolve, reject) {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      formData.append('nom_persona', nom_persona);
      formData.append('ape_pate_persona', ape_pate_persona);
      formData.append('ape_mate_persona', ape_mate_persona);
      formData.append('nid_grado', nid_grado);
      formData.append('fecha_naci', fecha_naci);
      formData.append('foto_ruta', files[0], files[0].name);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 201) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", `${url}/persona`, true);
      // console.log(formData);
      xhr.send(formData);
    });
  }


}
