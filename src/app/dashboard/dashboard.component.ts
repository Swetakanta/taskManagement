import { StickyDirection } from '@angular/cdk/table';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatTable, MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { Router } from "@angular/router";


export interface PeriodicElement {
  name: string;
  position: number;
  priority: string;
  description: string;
  duedate: Date;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Birthday', priority: 'P2', description: 'H', duedate: new Date(2024, 1, 17), status: 'To Do'},
  {position: 2, name: 'Reminder', priority: 'P0', description: 'H', duedate: new Date(2024, 1, 17), status: 'To Do'},
  {position: 3, name: 'Dinner Date', priority: 'P1', description: 'H', duedate: new Date(2024, 1, 17), status: 'To Do'},
  {position: 4, name: 'Exam Preparation', priority: 'P2', description: 'H', duedate: new Date(2024, 1, 17), status: 'To Do'},
  {position: 5, name: 'Office Party', priority: 'P4', description: 'H', duedate: new Date(2024, 1, 17), status: 'To Do'},
  {position: 6, name: 'Atish House Inaguration', priority: 'P5', description: 'H', duedate: new Date(2024, 1, 17), status: 'To Do'},
  {position: 7, name: 'Deployment Reminder', priority: 'P0', description: 'H', duedate: new Date(2024, 1, 17), status: 'To Do'},
  {position: 8, name: 'Client Feedback', priority: 'P0', description: 'H', duedate: new Date(2024, 1, 17), status: 'To Do'},
  {position: 9, name: 'New Requirment', priority: 'P0', description: 'H', duedate: new Date(2024, 1, 17), status: 'To Do'},
  {position: 10, name: 'Electric Bill', priority: 'P0', description: 'H', duedate: new Date(2024, 1, 17), status: 'To Do'},
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCommonModule, MatFormFieldModule, MatInputModule, MatIcon, MatButtonModule, MatTableModule, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

  constructor(private router: Router){}
[x: string]: any;
dragDisabled = true;

  displayedColumns: string[] = ['position', 'name', 'priority', 'description', 'duedate', 'status', 'action'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  addData() {
    this.router.navigate(['/tasks/add-task']);
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  applyFilter(event: Event) {
  
  }

}
