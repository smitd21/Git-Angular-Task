import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './MyComponents/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './MyComponents/employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import { HomeComponent } from './MyComponents/home/home.component';

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeDetailsComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
