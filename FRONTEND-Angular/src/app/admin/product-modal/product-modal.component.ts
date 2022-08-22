import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductListComponent } from '../admin-body/product-list/product-list.component';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {

  productForm!:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public anyVar:any, private _mdr:MatDialogRef<ProductListComponent>, private fb: FormBuilder) {
    // this.productForm = this.fb.group({

    // })
   }


  closeModal(){
    this._mdr.close(false);
  }
  ngOnInit(): void {
  }


}
