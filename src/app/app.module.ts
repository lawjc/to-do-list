import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TaskService } from './shared/task/task.service';
import { TaskListComponent } from './task-list/task-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatSelectModule,MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const appRoutes: Routes = [

  { path: '', redirectTo: '/task-list', pathMatch: 'full' },
  {
    path: 'task-list',
    component: TaskListComponent
  },
  {
    path: 'task-add',
    component: TaskEditComponent
  },
  {
    path: 'task-edit/:id',
    component: TaskEditComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
