import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/Services/category-service.service';

@Component({
  selector: 'app-category-wise-product',
  templateUrl: './category-wise-product.component.html',
  styleUrls: ['./category-wise-product.component.css']
})
export class CategoryWiseProductComponent implements OnInit {

  constructor(private route:ActivatedRoute, private categoryService: CategoryServiceService) { }

  categoryId!:any
  categories:any[]=[]
  ngOnInit():void {
    this.route.paramMap.subscribe((p:ParamMap)=>{
      this.categoryId = p.get('id');
    })
      
    this.categoryService.getSubCategories(this.categoryId).subscribe((cat :any[])=>{
      this.categories = cat;
      console.log(this.categories);
    })

  }
  
  subsubCategories:any[]=[]
  getSubSubCategories(id:number){
    this.categoryService.getSubCategories(id).subscribe((subCate:any[])=>{
      this.subsubCategories = subCate;
    })
  }
}