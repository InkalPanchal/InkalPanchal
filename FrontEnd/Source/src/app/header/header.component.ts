import { Component,  Injector,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartComponent } from '../body/shopping-cart/shopping-cart.component';
import { LoginComponent } from '../login/login.component';
import { AuthServiceService } from '../Services/auth-service.service';
import { CategoryServiceService } from '../Services/category-service.service';
import { ProductService } from '../Services/product.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  private authService:AuthServiceService;
  private categoryService: CategoryServiceService;
  private productService:ProductService;
  constructor(private injector:Injector, private matDialog: MatDialog, private router: ActivatedRoute,private route:Router) {
    this.authService = this.injector.get<AuthServiceService>(AuthServiceService);
    this.categoryService = this.injector.get<CategoryServiceService>(CategoryServiceService);
    this.productService = this.injector.get<ProductService>(ProductService);
  }

  keyword = 'categoryName'
  keyword1 = 'productName'
  categories!:any[]
  products!:any[]
  userName!:any
  ngOnInit(): void {
    let obj = localStorage.getItem('userData');
    if(obj != "null"){

      if(typeof obj == 'string'){
        let userData = JSON.parse(obj);
        this.userName = userData.userName;
        if(this.userName == null){
          alert("UserName not found")
        }
      }
    }else {
      this.route.navigate([''], {relativeTo: this.router})
    }
    this.categoryService.getCategories().subscribe((categry:any[])=>{
      this.categories = categry;
    })
    this.productService.getProductList().subscribe((Product:any[])=>{
      this.products = Product;
    })
    
  }
  // matDialogRef!:MatDialogRef<LoginComponent>;
  openModal(){
    // this.matDialogRef = 
    this.matDialog.open(LoginComponent, {
      "autoFocus": false
    });
  }
 
  openCart(){
    this.matDialog.open(ShoppingCartComponent, {
      "width": "100%",
      "height":"50%",
      "autoFocus":false
    })

    
  }
  logout(){
    this.authService.logOut();
  }

  selectEvent(item:any){
    console.log(item.categoryId);
    this.route.navigate(['/categoryWistListing', item.categoryId], {relativeTo: this.router});
  }
  // searchTerm!:any
  // searchedItems!:any
  // searchedId!:number
  // srch(searchingTerm:any){
  //   let category = {categoryName: searchingTerm.target.value};
  //   let product = {productName: searchingTerm.target.value};
  //   console.log(searchingTerm.target.value);
    
  //   this.categoryService.searchCategories(category).subscribe((c:any)=>{
  //     this.searchedItems = c;
  //     this.searchedId = c.categoryId;
  //     // console.log(this.searchedId);
  //     console.log(c);
      
  //   });
  //   this.productService.searchProduct(product).subscribe((p:any[])=>{
  //     this.searchedItems = p;
  //     // console.log(this.searchedItems);
      
  //   })
  // }
  // catId!:any
  // sortProducts!:any
  // searchInDatalist(srchTerm:any){
  //   // console.log(srchTerm.target.value);
    
  //   this.sortCategory = this.categories.filter(s => {
  //     let name = s.categoryName.toLowerCase().includes(srchTerm.target.value) 
  //     return name;
  //   })

  //   this.sortProducts = this.products.filter(p =>{
  //     return p.productName.toLowerCase().includes(srchTerm.target.value);
  //   })
    // console.log(this.sortCategory);

    
    
  }

  

