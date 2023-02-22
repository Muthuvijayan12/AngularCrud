import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService } from './employee.service';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HttpClient } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from  '@angular/material/Menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule
  ],
  providers: [HttpClientModule, EmployeeService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
