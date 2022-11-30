import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Order } from 'src/app/Models/Order';
import { AttributeServiceService } from 'src/app/Services/attribute-service.service';
import { OrderItemsService } from 'src/app/Services/order-items.service';
import { OrderServiceService } from 'src/app/Services/order-service.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-specific-product',
  templateUrl: './specific-product.component.html',
  styleUrls: ['./specific-product.component.css']
})
export class SpecificProductComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute, private attrService: AttributeServiceService, private orderService:OrderServiceService, private orderItemService: OrderItemsService) { }

  productId:any
  product:any
  attrColors!:any[]
  attrSizes!:any[]
  cartItems!:any[]
  prodId!:number
  totalAmount!:any
  quantity!:number
  ngOnInit(): void {
    this.route.paramMap.subscribe((p:ParamMap)=>{
      this.productId = p.get('productId');
    })
    this.getProduct(this.productId);

  }
  getProduct(id:number){
    this.productService.getProductById(id).subscribe((p:any)=>{
      this.product = p;
    })
  }
  
  
  getAttribute(){
    this.attrService.getProdColors(this.productId).subscribe((c:any[])=>{
      this.attrColors = c;
    });
    this.attrService.getProdSizes(this.productId).subscribe((s:any[])=>{
      this.attrSizes = s;
    })
  }


  AddToCart(product:any){
    let obj = localStorage.getItem('products');
    if(typeof obj == 'string'){
      this.cartItems = JSON.parse(obj); 
    }

    if(this.cartItems == null){
      this.cartItems = [];
      this.cartItems.push(product);
      localStorage.setItem('products', JSON.stringify(this.cartItems) );
      alert("Product Added to cart");
      console.log(this.cartItems);
      
    }else {
      let tempProduct = this.cartItems.find(x =>x .productId == product.productId);
      if(tempProduct == null){
        this.cartItems.push(product);
        localStorage.setItem('products', JSON.stringify(this.cartItems));
        alert('Product added to cart');
        console.log(this.cartItems);
        
      }
      else {
        alert("Product already exists");
      }
    }
  }

  
}
