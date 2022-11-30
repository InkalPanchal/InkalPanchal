import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private router:ActivatedRoute, private authService: AuthServiceService) { }
  userName!:any
  ngOnInit(): void {
    this.router.paramMap.subscribe((params:ParamMap)=>{
      this.userName=params.get('userName');
    })
  }

  logout(){
    this.authService.logOut();
  }

}
