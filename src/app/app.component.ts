import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';
  constructor(
    public router: Router
  ) { }
  ngOnInit() {
    if (this.isUserLogged()) {
      this.router.navigateByUrl('/list');
    } else {
      this.router.navigateByUrl('/landing-page');
    }
  }
  isUserLogged() {
    const token = localStorage.getItem('toDoToken');
    return token && token.length;
  }
}
