import { Component, OnInit } from '@angular/core';
import { OrderItems } from 'src/app/Models/OrderItem';
import { OrderItemsService } from 'src/app/Services/order-items.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  constructor(private orderItemService:OrderItemsService, private productService:ProductService) { }

  products:any[] = []
  orderItems!:any[]
  ngOnInit(): void {
    this.orderItemService.getOrderItems().subscribe((o:OrderItems[])=>{
      this.orderItems = o;
      console.log(o);
      for (let i = 0; i < this.orderItems.length; i++) {
        
        this.getProduct(this.orderItems[i].productId);
        
      }
    })
    

  }
  getProduct(id:number){

      this.productService.getProductById(id).subscribe((p:any)=>{
        this.products.push(p);
        console.log(p);
      })
    }
  }


