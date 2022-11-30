import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient) { }
  hostUrl = environment.apiUrl + 'Brand/';
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-type':'application/json'
    })
  }
  getBrandList(){
    return this.http.get<Array<any>>(`${this.hostUrl}`,this.httpOptions);
  }

  addBrand(brand:any){
    return this.http.post<any>(`${this.hostUrl}`, brand, this.httpOptions);
  }

  updateBrand(id:number, brand:any){
    return this.http.put<any>(`${this.hostUrl}${id}`,brand, this.httpOptions);
  }
  deleteBrand(id:number){
    return this.http.delete<any>(`${this.hostUrl}${id}`, this.httpOptions);
  }
}
