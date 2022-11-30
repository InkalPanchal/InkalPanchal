import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/Models/Category';
import { CategoryServiceService } from 'src/app/Services/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() thatTerm!:string
  CategoryForm!:FormGroup
  
  constructor(private categoryService: CategoryServiceService, private fb:FormBuilder) { 
    this.CategoryForm = this.fb.group({
      categoryId:[0],
      categoryName:['', Validators.required],
      parentCategory:[]
    })
    
  }

  parentCategories: Category[]=[]
  subCategories:Category[] = []
  categories: Category[] = [];
  ngOnInit():void {
    this.categoryService.getCategories()
                        .subscribe((p: Category[]) => 
                        { 
                          this.categories = p;
                        })

    this.categoryService.getParentCategory().subscribe((p:Category[])=>{
      this.parentCategories = p;
      // console.log(this.thatTerm);
        
    })

  }

  getSubCategories(id:number){
    this.categoryService.getSubCategories(id).subscribe((p:Category[])=>{
      this.subCategories = p;
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

  subSubCategories:Category[]=[]
  getSubSubCategories(id:number){
    this.categoryService.getSubCategories(id).subscribe((p:Category[])=>{
      
      this.subSubCategories = p;
    })
  }
  
}
