import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/landing-page');
  }
}
