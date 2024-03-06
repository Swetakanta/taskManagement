import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { TaskmanagementService } from '../task-management.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  addEditGeneralSiteDetails!: FormGroup<any>;
  priorityData: any[] = ['P0', 'P1', 'P2', 'P3', 'P4', 'P5'];
  statusOptionData: any[] = ['To Do', 'In Progress', 'Completed'];
  editEnabled: boolean = false;
  editId!: number;

  constructor(private router: Router,
    private fb: FormBuilder, private taskmanagementService: TaskmanagementService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      let currentRoute = segments.map(segment => segment.path).join('/');
      if(currentRoute == "edit-task") {
        this.editEnabled = true;
      } else {
        this.editEnabled = false;
      }
    });
    this.initializeForms();
  }

  redirectToDashboard():void {
    this.addEditGeneralSiteDetails.reset();
    this.router.navigate(['/dashboard']);
  }

  initializeForms() {
    this.addEditGeneralSiteDetails = this.fb.group<any>({
      name: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      dueDate: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
  });
  if(this.editEnabled) {
    this.populateData();
  }
  }

  populateData() {
    this.editId = parseInt(localStorage.getItem("editedId") || '0');
    var existingDataSource = this.taskmanagementService.getTaskData();
    let foundData = existingDataSource.find(item => item.id === this.editId);
    this.addEditGeneralSiteDetails.setValue({
      name: foundData?.name,
      priority: foundData?.priority,
      status: foundData?.status,
      dueDate: foundData?.dueDate,
      description: foundData?.description
    });
    console.log(foundData);
  }

  addNewtask() {
    var existingDataSource = this.taskmanagementService.getTaskData();
    const highestPosition = Math.max(...existingDataSource.map(item => item.position));
    var newtaskData = this.addEditGeneralSiteDetails.value;
    newtaskData.position = highestPosition+1;
    newtaskData.id = highestPosition+1;
    this.taskmanagementService.setNewTask(newtaskData);
    this.router.navigate(['/dashboard']);
    this.addEditGeneralSiteDetails.reset();
  }

  updateTask() {
    var newtaskData = this.addEditGeneralSiteDetails.value;
    var existingDataSource = this.taskmanagementService.getTaskData();
    let foundData = existingDataSource.find(item => item.id === this.editId);
    newtaskData.position = foundData?.position;
    newtaskData.id = foundData?.id;
    // Find the index of the element with the matching ID in existingDataSource
    const index = existingDataSource.findIndex(item => item.id === newtaskData.id);

    // If the index is found, update the element with data from newtaskData
    if (index !== -1) {
      existingDataSource[index] = { ...existingDataSource[index], ...newtaskData };
    }
    this.taskmanagementService.setTaskData(existingDataSource);
    this.router.navigate(['/dashboard']);
    this.addEditGeneralSiteDetails.reset();
  }

}
