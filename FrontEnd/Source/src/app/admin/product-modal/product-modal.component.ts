import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AttributeServiceService } from 'src/app/Services/attribute-service.service';
import { BrandService } from 'src/app/Services/brand.service';
import { CategoryServiceService } from 'src/app/Services/category-service.service';
import { ProductService } from 'src/app/Services/product.service';
import { ProductListComponent } from '../admin-body/product-list/product-list.component';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {

  productForm!:FormGroup;
  constructor(private brandService:BrandService, private attrService:AttributeServiceService, @Inject(MAT_DIALOG_DATA) public anyVar:any, private _mdr:MatDialogRef<ProductListComponent>, private fb: FormBuilder, private productService: ProductService, private categoryService:CategoryServiceService) {

    //form for fill product data
    this.productForm = this.fb.group({
      productId: [0],
      productName: [''],
      productPrice: [],
      description: [null],
      availability: [''],
      quantity: [],
      highlights: [null],
      otherSpecifications: [null],
      brandId: [],
      productCategoryId: [],
      color:[''],
      size:[''],
      modifiedDate: [Date],
      brand:[''],
      productCategory:[''],
      cartItems:[''],
      orderItems:[''],
      productAttributes:[''],
      productImages:[''],
      shortListItems:[''],



    })
  }

  //to store color list
  colorAttributes!:any[]

  //to store size list
  sizeAttributes!: any[]
  
  parentCategories:any
  brands!:any[]
  ngOnInit(): void {
    
    //get colorList
    let colorId:any;
    let type = "color";
    this.attrService.getAttributeId(type).subscribe(
      (p:any) => 
      {
        colorId = p;//get id from master table and pass to attribute service and get id from that table
        this.attrService.getAttributesValues(colorId).subscribe(
          (attr:any[])=>{
            this.colorAttributes = attr; 
        })
      })

      //get sizelist
      let sizeId:any
      let type1 = 'size';
      this.attrService.getAttributeId(type1).subscribe((p:any)=>{
        sizeId = p; //get id from master table and pass to attribute service and get id from that table
        this.attrService.getAttributesValues(sizeId).subscribe((a:any)=>{
          this.sizeAttributes = a;
        })
        
      })

      //get parentcategory
      this.categoryService.getParentCategory().subscribe((pc:any)=> {
        this.parentCategories = pc
       
      })

      //get brands
      this.brandService.getBrandList().subscribe((b:any[])=>{
        this.brands = b;
      })
      let obj = localStorage.getItem('editProductForm');
      if(typeof obj == 'string'){
        let obj1 = JSON.parse(obj);
        this.productForm.setValue(obj1);
      }
    }

    subCategories:any
    getSubCategories(id:any){      
      this.categoryService.getSubCategories(id.target.value).subscribe((sc:any)=>{
        this.subCategories = sc;
      })
    }

    subSubCategories:any
    getSubSubCategory(id:any){
      this.categoryService.getSubCategories(id.target.value).subscribe((c:any)=>{
        this.subSubCategories = c;
      })
    }

  //add product
  product !:any
  addProduct(){
    this.product = this.productForm.value;
    this.productService.addProduct(this.product).subscribe((p:any)=>{
      console.log(p);
      this._mdr.close(false);
    })    
  }

  //close the modal of product form
  closeModal(){
    this._mdr.close(false);
  }




}
