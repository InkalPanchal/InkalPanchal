import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  constructor(private http: HttpClient) { }
  hostUrl = "https://localhost:44346/api/Products/" 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }
  ngOnInit(): void {
    
  };
  getProductList() : Observable<Array<any>>{
    return this.http.get<Array<any>>(`${this.hostUrl}`, this.httpOptions);
  }
}
