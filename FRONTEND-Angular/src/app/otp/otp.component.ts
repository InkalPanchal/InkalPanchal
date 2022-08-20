import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  
  mobileNo!:number;
  constructor(private activeRoute: ActivatedRoute, private _mdr:MatDialogRef<OtpComponent>) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(p => 
      this.mobileNo = p['mobNo'] 
    )
  }
  CloseDialog(){
    this._mdr.close(false);
  }

}
