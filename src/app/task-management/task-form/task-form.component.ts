import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  constructor(private router: Router){}
  redirectToDashboard():void {
    this.router.navigate(['/dashboard']);
  }
}
