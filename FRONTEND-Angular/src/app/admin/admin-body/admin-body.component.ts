import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-admin-body',
  templateUrl: './admin-body.component.html',
  styleUrls: ['./admin-body.component.css']
})
export class AdminBodyComponent implements OnInit {

  constructor(private matDialog: MatDialog, private route: Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
  }

  openCategoryModal(){
    this.matDialog.open(CategoriesComponent, {
      "width":"800px",
      "autoFocus": false
    });
  }

  openProductModal(){
    this.matDialog.open(ProductModalComponent, {
      "width":"900px",
      "autoFocus":false
    })
  }
}
