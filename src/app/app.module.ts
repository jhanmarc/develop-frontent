import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './component/student/student.component';
import { StudentNewComponent } from './component/student-new/student-new.component';
import { PagesComponent } from './component/pages/pages.component';
import { ReportComponent } from './component/report/report.component';
import { TabsComponent } from './component/partials/tabs/tabs.component';
import { LayoutsComponent } from './component/layouts/layouts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular Material Module */
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentNewComponent,
    PagesComponent,
    ReportComponent,
    TabsComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


