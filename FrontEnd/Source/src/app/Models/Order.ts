export interface Order {
    CustomerId:number,
    Total:number,
    OrderStatus:number,
    CreatedDate: Date,
    ModifiedDate: Date,
    OrderItems: any[]
}