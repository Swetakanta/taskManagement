// task-management.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  { path: 'add-task', component: TaskFormComponent },
  { path: 'task/:id', component: TaskDetailComponent }
];

@NgModule({
    declarations: [TaskFormComponent, TaskDetailComponent],
    imports: [RouterModule.forChild(routes), MatFormFieldModule], // Use 'forChild' for feature modules
    exports: [TaskFormComponent, TaskDetailComponent]
})
export class TaskManagementModule { }
