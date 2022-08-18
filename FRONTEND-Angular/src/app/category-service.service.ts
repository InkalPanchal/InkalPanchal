import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Category } from './Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }

  hostUrl = "https://localhost:44346/api/";

  getCategories(): Observable<Array<Category>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',

      })
    }
    return this.http.get<Array<Category>>(`${this.hostUrl}Category`, httpOptions);
  }
}
