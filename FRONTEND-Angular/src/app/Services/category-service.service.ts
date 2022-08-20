import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }

  hostUrl = "https://localhost:44346/api/Category/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',

    })
  }
  getCategories(): Observable<Array<any>> {
    
    return this.http.get<Array<any>>(`${this.hostUrl}`, this.httpOptions);
  }

  postCategory(category : any) {
    return this.http.post<any>(`${this.hostUrl}addCategory`, category, this.httpOptions );
  }

  updateCategory(id:number, category:any ) {
    return this.http.put<any>(`${this.hostUrl}${id}`,category, this.httpOptions);
  }
  
  deleteCategory(id:number){
    return this.http.delete<number>(`${this.hostUrl}${id}`, this.httpOptions);
  }
}
