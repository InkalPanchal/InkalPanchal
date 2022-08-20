import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryServiceService } from 'src/app/Services/category-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  CategoryForm!:FormGroup
  constructor(private categoryService: CategoryServiceService, private fb:FormBuilder, @Inject(MAT_DIALOG_DATA) public anyVariable:any, private _mdr:MatDialogRef<CategoriesComponent>) { 
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

  // close modal
  closeModal(){
    this._mdr.close(false);
  }
}
