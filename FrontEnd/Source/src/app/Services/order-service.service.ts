import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../Models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

  hostUrl = environment.apiUrl + "Order";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',

    })
  }
  PostOrder(OrderObject:Order){
    return this.http.post<any>(`${this.hostUrl}`,OrderObject,this.httpOptions );
  }

  
}
