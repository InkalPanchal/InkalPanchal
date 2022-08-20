import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  // matDialogRef!:MatDialogRef<LoginComponent>;
  openModal(){
    // this.matDialogRef = 
    this.matDialog.open(LoginComponent, {
      "autoFocus": false
    });
  }
 


}
