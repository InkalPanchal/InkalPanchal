import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../category-service.service';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryServiceService) { }

  categories: Array<Category> = [];
  ngOnInit():any {
    this.categoryService.getCategories()
                        .subscribe((p: Array<Category>) => 
                        { 
                          this.categories = p;
                        })
  }

}
