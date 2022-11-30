import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  // p !: number;

  brandForm !: FormGroup
  constructor(private brandService:BrandService, private fb:FormBuilder) {
    this.brandForm = this.fb.group({
      brandId:[],
      brandName:[''],
      description:[''],
      brandLogo:[''],
      modifiedDate:Date.now,
      createddate:Date.now
    })
   }

  brandList:any[] = [];
  ngOnInit(): void {
    this.brandService.getBrandList().subscribe((p:any[])=>{
      this.brandList = p;
    })
  }

  brand:any = {};
  addNewBrand(){
    this.brand = this.brandForm.value;
    this.brandService.addBrand(this.brand).subscribe((p:any)=>{
      console.log(p);
      this.ngOnInit();
    })
  }

  editBrand(brand:any){
    this.brandForm.setValue(brand);
  }

  updateBrand(){
    this.brand = this.brandForm.value;
    this.brandService.updateBrand(this.brand.brandId, this.brand).subscribe((p:any)=>{
      this.brand = p;
      console.log(this.brand);
      this.ngOnInit();
    })
  }

}
