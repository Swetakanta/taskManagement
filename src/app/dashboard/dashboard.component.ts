import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { Router } from "@angular/router";
import { TaskmanagementService } from '../task-management/task-management.service';
import { PeriodicElement } from '../task-management/task-management.model';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCommonModule, MatFormFieldModule, MatInputModule, MatIcon, MatButtonModule, MatTableModule, DatePipe, MatSortModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

  constructor(private router: Router, private taskmanagementService: TaskmanagementService, private _liveAnnouncer: LiveAnnouncer) { }
  [x: string]: any;
  dragDisabled = true;

  displayedColumns: string[] = ['position', 'name', 'priority', 'description', 'dueDate', 'status', 'action'];
  dataSource: any;

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.taskmanagementService.getTaskData());
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  addData() {
    this.router.navigate(['/tasks/add-task']);
  }

  editData(id: any) {
    this.router.navigate(['/tasks/edit-task']);
    localStorage.setItem("editedId", id);
  }

  deleteData(id: number) {
    this.dataSource.data = this.dataSource.data.filter((item: { id: number; }) => item.id !== id);
    this.taskmanagementService.setTaskData(this.dataSource);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
