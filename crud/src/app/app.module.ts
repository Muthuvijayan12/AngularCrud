import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService } from './employee.service';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatRadioModule } from '@angular/material/radio';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    EmployeeService,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule

  ],
  providers: [HttpClientModule, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
