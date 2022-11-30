import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }

  // hostUrl = "https://localhost:44346/api/Category";
  hostUrl = environment.apiUrl + 'Category'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',

    })
  }
  getCategories(): Observable<Array<any>> {
    
    return this.http.get<Array<any>>(`${this.hostUrl}`, this.httpOptions);
  }

  postCategory(category : any) {
    return this.http.post<any>(`${this.hostUrl}/addCategory`, category, this.httpOptions );
  }

  updateCategory(id:number, category:any ) {
    return this.http.put<any>(`${this.hostUrl}/${id}`,category, this.httpOptions);
  }
  
  deleteCategory(id:number){
    return this.http.delete<number>(`${this.hostUrl}/${id}`, this.httpOptions);
  }

  getCategoryList(){
    return this.http.get<Array<any>>(`${this.hostUrl}/categoryList`, this.httpOptions);
  }
  
  getParentCategory(){
    return this.http.get<Array<any>>(`${this.hostUrl}/parentCatList`, this.httpOptions);
  }
  getSubCategories(id:any){
    return this.http.get<Array<any>>(`${this.hostUrl}/subCategories/${id}`,this.httpOptions);
  }

  getSubSubCategories(id:number){
    return this.http.get<Array<any>>(`${this.hostUrl}/getSubSubCat/${id}`,this.httpOptions);
  }
  searchCategories(category:any){
    return this.http.post<Array<any>>(`${this.hostUrl}/categories/searchCategory`,category, this.httpOptions);
  }
}
