import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  public URL = {
    list: '/list',
    create: '/createList',
    delete: '/delete'
  };
  toBeEdited;
  isEdit = false;
  serverURL = 'http://localhost:3000';
  constructor(public httpClient: HttpClient) { }
  getList(page,limit = 10) {
    let httpParams = new HttpParams().set('page', page.toString())
      .set('limit', limit.toString());
    return this.httpClient.get<any>(this.serverURL + this.URL.list, { params: httpParams });
  }
  createList(data) {
    return this.httpClient.post<any>(this.serverURL + this.URL.create, data);
  }
  update(data) {
    return this.httpClient.put<any>(this.serverURL + this.URL.create, data);
  }
  delete(id) {
    return this.httpClient.post<any>(this.serverURL + this.URL.delete, { _id: id });
  }
}
