import { ToDoService } from 'src/app/services/to-do/to-do.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  description;
  title;
  constructor(
    public toDoService: ToDoService,
    public router: Router
  ) { }

  ngOnInit() {
    if (this.toDoService.isEdit) {
      this.title = this.toDoService.toBeEdited.title;
      this.description = this.toDoService.toBeEdited.description;
    }
  }
  create() {
    this.toDoService.createList({ title: this.title, description: this.description }).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/list');
    });
  }
  update() {
    this.toDoService.update({ title: this.title, description: this.description, _id: this.toDoService.toBeEdited._id }).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/list');
    });
  }

}
