import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  productForm!:FormGroup
  constructor(private http: HttpClient, private fb: FormBuilder) {
    
   }
  // hostUrl = "https://localhost:44346/api/Products/" 
  hostUrl = environment.apiUrl + 'Products/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }
  ngOnInit(): void {
     
  }
  getProductList() : Observable<Array<any>>{
    return this.http.get<Array<any>>(`${this.hostUrl}`, this.httpOptions);
  }

  getProductImages(){
    return this.http.get<Array<any>>(`${this.hostUrl}productImages`, this.httpOptions);
  }

  getProductDetails(){
    return this.http.get<Array<any>>(`${this.hostUrl}productDetails`, this.httpOptions);
  }

  addProduct(product:any){
    return this.http.post<any>(`${this.hostUrl}addProduct`, product, this.httpOptions);
  }

  updateProduct(id:number, product:any){
    return this.http.put<any>(`${this.hostUrl}${id}`, product, this.httpOptions);
  }

  deleteProduct(id:number){
    return this.http.delete<any>(`${this.hostUrl}${id}`, this.httpOptions);
  }

  getProductById(id:number){
    return this.http.get<any>(`${this.hostUrl}${id}`, this.httpOptions);
  }

  searchProduct(product:any){
    return this.http.post<Array<any>>(`${this.hostUrl}searchProduct`, product, this.httpOptions);
  }

 
}
