import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TaskManagementModule } from './task-management/task-management.module';

@NgModule({
  declarations: [
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    TaskManagementModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
