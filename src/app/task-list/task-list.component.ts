import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

	tasks: Array<any>

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  	this.taskService.getAll().subscribe(data => {
  		this.tasks = data;
  	})
  }

}
