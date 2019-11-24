import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Platillo } from '../clases/platillo';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {

  // Base url
  baseurl = 'http://localhost:3000';


  constructor(
    private http: HttpClient
    ) 
  { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // GET
  ObtenerPlatillos(): Observable<Platillo> {
    return this.http.get<Platillo>(this.baseurl + '/platillos/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // POST
  guardarPlatillo(data): Observable<Platillo> {
    return this.http.post<Platillo>(this.baseurl + '/platillos/', data)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }


  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
