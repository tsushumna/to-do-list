import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  onClick(type) {
    switch (type) {
      case 'login':
        this.router.navigateByUrl('/login');
        break;
      case 'register':
        this.router.navigateByUrl('/register');
        break;
    }
  }
}
