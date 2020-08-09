import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoService } from '../services/to-do/to-do.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list = [];
  totalCount = 0;
  currentPage = 1;
  constructor(
    public router: Router,
    public toDoService: ToDoService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('toDoToken');
    if (!(token && token.length)) {
      this.router.navigateByUrl('/landing-page');
    } else {
      this.toDoService.isEdit = false;
      this.toDoService.toBeEdited = undefined;
      this.getList();
    }
  }
  getList(page = 1) {
    this.currentPage = page;
    if (this.list[(page - 1) * 10 ] === undefined) {
      this.toDoService.getList(page).subscribe(res => {
        console.log(res);
        this.totalCount = res.totalCount;
        res.todo.forEach((eachList, index) => {
          this.list[(page - 1) * 10 + index] = eachList;
        });
      });
    }
  }
  create() {
    this.router.navigateByUrl('/create');
  }
  onEdit(listItem) {
    this.toDoService.isEdit = true;
    this.toDoService.toBeEdited = listItem;
    this.router.navigateByUrl('/create');
  }
  delete(eachList, i) {
    this.toDoService.delete(eachList._id).subscribe(res => {
      console.log(res);
      this.list.splice(((this.currentPage - 1) * 10 + i), 1);
      this.totalCount--;
      this.currentPage = 1;
    });

  }
}
