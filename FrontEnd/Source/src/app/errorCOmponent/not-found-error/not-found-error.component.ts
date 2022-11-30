import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-error',
  templateUrl: './not-found-error.component.html',
  styleUrls: ['./not-found-error.component.css']
})
export class NotFoundErrorComponent implements OnInit {
  errorMessage:string = "404 Not Found Error, Enter valid data!!!";
  constructor() { }

  ngOnInit(): void {
  }

}
