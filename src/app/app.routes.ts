import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent, children: [
    {
      path: 'dashboard',
      component: DashboardComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'prefix'},
    {path: '**', redirectTo: '/', pathMatch: 'prefix'}
  ]},
  { 
    path: 'tasks',  // Group related routes under a common path
    loadChildren: () => import('./task-management/task-management.module').then(m => m.TaskManagementModule) 
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
