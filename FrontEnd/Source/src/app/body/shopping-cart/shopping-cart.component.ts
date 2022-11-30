import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { Order } from 'src/app/Models/Order';
import { OrderItems } from 'src/app/Models/OrderItem';
import { OrderItemsService } from 'src/app/Services/order-items.service';
import { OrderServiceService } from 'src/app/Services/order-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public anyVariable:any, private _mdr:MatDialogRef<ShoppingCartComponent> , private orderService: OrderServiceService, private orderItemService : OrderItemsService, private route:ActivatedRoute, private router:Router) { }

  products!:any[]
  userId!:number
  ngOnInit(): void {
    this.getProductFromCart();
    for(let i in this.products){
      this.products[i].quantity = 1;
    }
    this.getTotal(this.products);
    let userData = JSON.parse(localStorage.getItem('userData') || '[]');
     this.userId = userData.customerId
  }

  getProductFromCart(){
    if(localStorage.getItem('products') == null){
      this.products = []
    }else {
      let obj = localStorage.getItem('products')
      if(typeof obj == 'string'){
        this.products = JSON.parse(obj);
      }
    }
  }

  saveToCart(){
    localStorage.setItem('products', JSON.stringify(this.products));
    let obj = localStorage.getItem('products')
    if(typeof obj == 'string'){
      this.products = JSON.parse(obj);
    }
    console.log(this.products);
      
  }

  incrseQuntty(product:any){
    product.quantity = product.quantity + 1;
    this.getTotal(this.products);
  }

  decrseQuantity(product:any){
    product.quantity = product.quantity - 1;
    console.log(product.quantity);
    
    if(product.quantity == 0){
      this.deleteFromCart(product.productId);
    }
    this.getTotal(this.products);
  }

  deleteCart(){
    localStorage.removeItem('products');
    for(let i in this.products){
      this.products[i].pop();
    }
    this.saveToCart();
    this.getProductFromCart();
  }

  deleteFromCart(id:number){
    this.getProductFromCart();
    const index = this.products.findIndex(x => x.productId === id);
    if(index > -1){
      this.products.splice(index, 1);
      this.saveToCart();
    }
    this.getTotal(this.products);
  }

  allTotal!:number
  getTotal(allItems:any[]){
    let total = 0;
    for(let i in allItems){
      total = total + (allItems[i].quantity * allItems[i].productPrice);
    }
    this.allTotal = total;
  }

  closeModal(){
    this._mdr.close(false);
  }
  
  
  // order!:Order
  orderObject!:Order
checkout(){
  if(localStorage.getItem('userData')){

    let orderItems:OrderItems[] = []
    this.orderObject =  {
      CustomerId: this.userId,
      Total: this.allTotal,
      OrderStatus: 277,
      ModifiedDate: new Date(),
      CreatedDate: new Date(),
      OrderItems: orderItems
    };
    
    for(let i in this.products){
      orderItems.push({
        ProductId : this.products[i].productId,
        Quantity : this.products[i].quantity
      })
    }
    this.orderService.PostOrder(this.orderObject).subscribe((p:Order)=>{
      console.log(p);
      })
      this.deleteCart();
      this.router.navigate(['/user/userOrders'], {relativeTo:this.route});

  }else 
  {
    alert("First login and then checkout");
    this.router.navigate(['/'], {relativeTo: this.route});
    this._mdr.close();
  }
  }

}
