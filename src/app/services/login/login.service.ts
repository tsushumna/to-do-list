import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public URL = {
    register: '/user',
    login: '/signin',
    list: '/list'
  };
  serverURL = 'http://localhost:3000';
  constructor(public httpClient: HttpClient) { }
  login(data) {
    return this.httpClient.post<any>(this.serverURL + this.URL.login, data);
  }
  register(data) {
    return this.httpClient.post<any>(this.serverURL + this.URL.register, data);
  }
}
