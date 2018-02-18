import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../shared/task/task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit, OnDestroy {

	task: any = {};
	sub: Subscription;

  	constructor(private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskService) { }

  	ngOnInit() {
  		this.sub = this.route.params.subscribe(params => {
  			const id = params['id'];
  			if (id) {
  				this.taskService.get(id).subscribe((task: any) =>{
  					if (task) {
  						this.task = task;
  						this.task.href = '//localhost:8080/tasks/' + id;
              this.task.updatedDate = new Date(task.updatedDate);
  					}
  					else {
  						console.log(`Task with id '${id}' not found, returning to list.`);
  						this.gotoList();
  					}
  				});
  			}
  		});
  	}

  	ngOnDestroy() { 
  		this.sub.unsubscribe();
  	}

  	gotoList() {
  		this.router.navigate(['/task-list']);
  	}

  	save(form: NgForm){
  		this.taskService.save(form).subscribe(result => {
  			this.gotoList();
  		}, error => console.error(error))
  	}

  	remove(href) {
  		this.taskService.remove(href).subscribe(result => { 
  			this.gotoList();
  		}, error => console.error(error))
  	}
}
