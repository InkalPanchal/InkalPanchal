import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryServiceService } from 'src/app/Services/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  CategoryForm!:FormGroup
  
  constructor(private categoryService: CategoryServiceService, private fb:FormBuilder) { 
    this.CategoryForm = this.fb.group({
      categoryId:[0],
      categoryName:['', Validators.required],
      parentCategory:[]
    })
  }

  categories: any = [];
  ngOnInit():any {
    this.categoryService.getCategories()
                        .subscribe((p: any) => 
                        { 
                          this.categories = p;
                        })
  }
  categry!:any
  postCatgry(){

    this.categry = this.CategoryForm.value;
    this.categoryService.postCategory(this.categry).subscribe((p:any)=>{
      this.categry = p;
      console.log(this.categry);
      
    })
  }

  editCategry(category:any){
    this.CategoryForm.setValue(category);
  }

  updateCategory(){
    this.categry = this.CategoryForm.value;
    this.categoryService.updateCategory(this.categry.categoryId, this.categry).subscribe((p:any)=>{
      this.categry = p;
      console.log(this.categry);
      
    })
  }
  deleteCategry(id:number) {
    this.categoryService.deleteCategory(id).subscribe(p=>console.log(p));
  }

}
