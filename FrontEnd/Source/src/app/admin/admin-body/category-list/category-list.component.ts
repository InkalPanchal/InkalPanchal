import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoryServiceService } from 'src/app/Services/category-service.service';


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
      parentCategory:[],
      parentCategoryNavigation:[],
      inverseParentCategoryNavigation:[],
      products:[],
      modifiedDate:Date
      
    })
   }

  categories!:any[]
  parentCategories!:any[]
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(p=>this.categories = p);
    //this.categoryService.getCategoryList().subscribe(p=>this.categories=p);
    this.categoryService.getParentCategory().subscribe(p => this.parentCategories = p);
    // this.getSubCategory();
    
    
  }
  getParentCategory(){
    this.categoryService.getParentCategory().subscribe(p => this.parentCategories = p);
  }
  subCategories!:any[]

  categry!:any
  postCatgry(){

    this.categry = this.CategoryForm.value;
    this.categoryService.postCategory(this.categry).subscribe((p:any)=>{
      this.categry = p;
      console.log(this.categry);
      this.ngOnInit();
    })
  }

  openEditForm:boolean = false
  close:boolean = true;
  editCategry(category:any){
    this.CategoryForm.setValue(category);
    this.openEditForm = true;
    this.close = false;
    
  }
  
  updateCategory(){
    this.categry = this.CategoryForm.value;
    this.categoryService.updateCategory(this.categry.categoryId, this.categry).subscribe((p:any)=>{
      this.categry = p;
      console.log(this.categry);
      this.openEditForm = false;
      this.ngOnInit();
    })
  }
  deleteCategry(id:number) {
    this.categoryService.deleteCategory(id).subscribe(p=>console.log(p));
    this.ngOnInit();
  }
  
  handleChange(index:any){
    this.CategoryForm.get('categoryName')?.setValue(index.target.value, {
      onlySelf:true,
    });
    this.getSubCategory(index.target.value);
  }
  getSubCategory(id:any){
    return this.categoryService.getSubCategories(id).subscribe((p:any) => this.subCategories=p);
  }
  show!:boolean
  showSubCat(id:any){
    this.getSubCategory(id);
    this.show = true;
  }
  refresh() {
    window.location.reload();
  }
}
