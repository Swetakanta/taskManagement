import {Injectable} from '@angular/core';
import { PeriodicElement } from './task-management.model';

@Injectable({
    providedIn: 'root'
})


export class TaskmanagementService {

    public dataSource: PeriodicElement[] = [
        {position: 1, id: 1, name: 'Birthday', priority: 'P2', description: 'H', dueDate: new Date(2024, 1, 17), status: 'To Do'},
        {position: 2, id: 2, name: 'Reminder', priority: 'P0', description: 'H', dueDate: new Date(2024, 1, 17), status: 'To Do'},
        {position: 3, id: 3, name: 'Dinner Date', priority: 'P1', description: 'H', dueDate: new Date(2024, 1, 17), status: 'To Do'},
        {position: 4, id: 4, name: 'Exam Preparation', priority: 'P2', description: 'H', dueDate: new Date(2024, 1, 17), status: 'To Do'},
        {position: 5, id: 5, name: 'Office Party', priority: 'P4', description: 'H', dueDate: new Date(2024, 1, 17), status: 'To Do'},
        {position: 6, id: 6, name: 'Atish House Inaguration', priority: 'P5', description: 'H', dueDate: new Date(2024, 1, 17), status: 'To Do'},
        {position: 7, id: 7, name: 'Deployment Reminder', priority: 'P0', description: 'H', dueDate: new Date(2024, 1, 17), status: 'To Do'},
        {position: 8, id: 8, name: 'Client Feedback', priority: 'P0', description: 'H', dueDate: new Date(2024, 1, 17), status: 'To Do'},
        {position: 9, id: 9, name: 'New Requirment', priority: 'P0', description: 'H', dueDate: new Date(2024, 1, 17), status: 'To Do'},
        {position: 10, id: 10, name: 'Electric Bill', priority: 'P0', description: 'H', dueDate: new Date(2024, 1, 17), status: 'To Do'},
      ];

    constructor() {
    }

    getTaskData() {
        return this.dataSource;
    }

    setTaskData(data: PeriodicElement[]) {
        this.dataSource = data;
    }

    setNewTask(data: PeriodicElement) {
        this.dataSource.push(data);
    }

}
