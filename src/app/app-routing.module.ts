import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './MyComponents/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './MyComponents/employee-details/employee-details.component';

const routes: Routes = [
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-details', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
