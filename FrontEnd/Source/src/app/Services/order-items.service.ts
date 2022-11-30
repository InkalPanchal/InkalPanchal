import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderItems } from '../Models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {

  constructor(private http: HttpClient) { }
  hostUrl = environment.apiUrl + "OrderItem";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }
  postOrderItems(OrderItem:any){
    return this.http.post<OrderItems>(`${this.hostUrl}`, OrderItem, this.httpOptions);

  }

  getOrderItems(){
    return this.http.get<Array<OrderItems>>(`${this.hostUrl}`, this.httpOptions);
  }
}
