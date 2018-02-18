import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {

	public API = '//localhost:8080';
	public TASK_API = this.API + '/tasks';

	constructor(private http: HttpClient) {
	}

	getAll(): Observable<any> {
	  return this.http.get(this.TASK_API);
	}

	get(id: string){
		return this.http.get(this.TASK_API + '/' + id);
	}

  	save(task: any): Observable<any> {
    	let result: Observable<Object>;
    	if (task['href']) {
      result = this.http.put(task.href, task);
    } 
    else {
      	result = this.http.post(this.TASK_API, task);
    }
    	return result;
  	}

	remove(href: string) {
		return this.http.delete(href);
	}
}
