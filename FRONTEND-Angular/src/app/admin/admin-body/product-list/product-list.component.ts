import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products:any[]=[];
  arrHighlight!:any[];

  ngOnInit() {
    this.productService.getProductList().subscribe(
      (p:any[]) => {
        this.products = p;
        for( let i in p){
          let prod = this.splitHighlight(p[i].highlights);
          this.products[i].highlights = prod;
        }
        
        
      }
        
      );
  }

  splitHighlight(arr:any){
    let splittedArr = arr.split("/");
    console.log(splittedArr);
    this.arrHighlight = splittedArr.join("\n");
    console.log(this.arrHighlight);
    
    
  }





  
  

}
