import { Component, OnInit } from '@angular/core';
import { customAuthService } from './../../services/auth.service';
import { AuthService } from "angular2-social-login";
import { Router, NavigationEnd,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  homePage=0;
  constructor(private router: Router) {
    console.log(router.url);
    router.events.subscribe((val) => {
      if(val['url']=== '/')
      {
          this.homePage=1;
      }
      else
      {
        this.homePage=0;
      }
      console.log(val['url'])
    });
   }




  ngOnInit() {

  }

}
