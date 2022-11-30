import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AttributeServiceService } from 'src/app/Services/attribute-service.service';
import { BrandService } from 'src/app/Services/brand.service';
import { CategoryServiceService } from 'src/app/Services/category-service.service';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productForm!: FormGroup
  constructor(private matDialog: MatDialog, private brandService: BrandService, private categoryService: CategoryServiceService, private attrService: AttributeServiceService, private productService: ProductService, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productId: [0],
      productName: [''],
      productPrice: [0],
      description: [null],
      availability: [''],
      quantity: [],
      highlights: [null],
      otherSpecifications: [null],
      brandId: [0],
      productCategoryId: [],
      modifiedDate: [Date],
      brand: [''],
      productCategory: [''],
      cartItems: [''],
      orderItems: [''],
      productAttributes: [''],
      productImages: [''],
      shortListItems: [''],
      // color:[''],
      // size:[0]
    })
  }
  //to store color list
  colorAttributes!: any[]
  //to store size list
  sizeAttributes!: any[]
  parentCategories: any
  brands!: any[]
  products: any[] = [];
  arrHighlight!: any[];

  ngOnInit() {
    this.productService.getProductDetails().subscribe(
      (p: any[]) => {
        this.products = p;

      });
    //get parentcategory
    this.categoryService.getParentCategory().subscribe((pc: any) => {
      this.parentCategories = pc

    })
  }

  openEditForm: boolean = false
  close: boolean = true;
  editProduct(product: any) {
    this.productForm.setValue(product);

    this.openEditForm = true;
    this.close = false;

  }

  product!: any
  updateProduct() {
    this.product = this.productForm.value;
    this.productService.updateProduct(this.product.productId, this.product).subscribe((prod: any) => {
      this.product = prod;
      console.log(this.product);
      this.openEditForm = false;
      this.ngOnInit();

    })
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log("deleted.");

    })
  }

  subCategories: any
  getSubCategories(id: any) {
    this.categoryService.getSubCategories(id.target.value).subscribe((sc: any) => {
      this.subCategories = sc;
    })
  }

  subSubCategories: any
  getSubSubCategory(id: any) {
    this.categoryService.getSubCategories(id.target.value).subscribe((c: any) => {
      this.subSubCategories = c;
    })
  }



}
