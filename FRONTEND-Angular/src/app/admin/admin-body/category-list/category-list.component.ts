import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoryServiceService } from 'src/app/Services/category-service.service';
import { CategoriesComponent } from '../../categories/categories.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  CategoryForm!:FormGroup
  constructor(private categoryService: CategoryServiceService, private fb: FormBuilder, private matDialog: MatDialog) {
    this.CategoryForm = this.fb.group({
      categoryId:[0],
      categoryName:['', Validators.required],
      parentCategory:[]
    })
   }

  categories!:any[]
  ngOnInit(): void {
    // this.categoryService.getCategories().subscribe(p=>this.categories = p);
    this.categoryService.getCategoryList().subscribe(p=>this.categories=p);
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
    this.matDialog.open(CategoriesComponent, {
      "width":"800px",
      "autoFocus": false
    });
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
