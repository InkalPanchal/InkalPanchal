import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService : NgbModal, private router:ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
  }

  open(){
    this.modalService.open(LoginComponent);
  }
  // opens(){
  //   this.route.navigate(['/header/login'], {relativeTo: this.router})
  // }

}
