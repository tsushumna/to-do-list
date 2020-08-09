import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public email;
  public password;
  public emailRegex = /^(([_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})))+$/;
  constructor(
    public loginService: LoginService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  register() {
    this.loginService.register({ username: this.email, password: this.password }).subscribe(res => {
      console.log(res);
      localStorage.setItem('toDoToken', res.token);
      this.router.navigateByUrl('/list');

    });
  }
  isFormValid() {
    return this.email && this.email.length &&
      this.emailRegex.test(this.email) &&
      this.password && this.password.length >= 8;
  }

}
