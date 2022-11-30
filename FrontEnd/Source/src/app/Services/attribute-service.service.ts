import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttributeServiceService {

  constructor(private http:HttpClient) { }

  hostUrl = environment.apiUrl + 'Attribute'
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-type':'application/json'
    })
  }
  ngOnInit() :void{
    
  }

  getAttributeId(name:string){
    return this.http.get<number>(`${this.hostUrl}/${name}`, this.httpOptions);
  }

  getAttributesValues(id:number){
    return this.http.get<Array<any>>(`${this.hostUrl}/attr/${id}`,this.httpOptions);
  }
  // getAttrByProductId(id:number){
  //   return this.http.get<Array<any>>(`${this.hostUrl}/productId/${id}`, this.httpOptions);
  // }

  getProdColors(id:number){
    return this.http.get<Array<any>>(`${this.hostUrl}/attrColors/productId/${id}`, this.httpOptions);
  }
  getProdSizes(id:number){
    return this.http.get<Array<any>>(`${this.hostUrl}/attrSizes/productId/${id}`, this.httpOptions);
  }
}
