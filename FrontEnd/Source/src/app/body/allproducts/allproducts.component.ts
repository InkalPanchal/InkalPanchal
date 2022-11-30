import { Component, OnInit } from '@angular/core';
import { AttributeServiceService } from 'src/app/Services/attribute-service.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  attrColors!:any
  attrSizes!:any
  constructor(private productService: ProductService, private attrService:AttributeServiceService) {
    
   }
  productList:any[] = []
  ngOnInit(): void {
    this.productService.getProductDetails().subscribe((p:any[])=>{
      this.productList = p;
      
    })

  }
  getAttribute(id:number){
    this.attrService.getProdColors(id).subscribe((c:any[])=>{
      this.attrColors = c;
    });
    this.attrService.getProdSizes(id).subscribe((s:any[])=>{
      this.attrSizes = s;
    })
  }

}
