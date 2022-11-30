import { Component, OnInit } from '@angular/core';
import { AttributeServiceService } from 'src/app/Services/attribute-service.service';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService ) { }
  productsList:any[] =[]
  
  ngOnInit(): void {
    this.productService.getProductDetails().subscribe((p:any[])=>{
      for (let i = 0; i < 6; i++) {
        this.productsList[i] = p[i];
        
      }
    })
  }

  

}
