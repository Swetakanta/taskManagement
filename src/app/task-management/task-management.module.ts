// task-management.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule, MatOption, MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'add-task', component: TaskFormComponent },
  { path: 'edit-task', component: TaskFormComponent }
];

@NgModule({
    declarations: [TaskFormComponent],
    providers: [provideNativeDateAdapter()],
    imports: [RouterModule.forChild(routes), MatFormFieldModule, MatCommonModule, MatFormFieldModule, MatInputModule, MatIcon, MatButtonModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatOption, MatSelect, MatDatepickerModule, CommonModule], // Use 'forChild' for feature modules
    exports: [TaskFormComponent]
})
export class TaskManagementModule { }
