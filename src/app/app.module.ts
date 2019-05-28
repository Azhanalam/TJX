import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {MatTableModule} from '@angular/material/table';


import { HeaderComponent } from './header/header.component';
import { TrunkingAddComponent } from './trunking-add/trunking-add.component';
import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
import { TrunkingListComponent } from './trunking-list/trunking-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';


import {MatCardModule} from '@angular/material/card';
import { TrunkingAmmendComponent } from './trunking-ammend/trunking-ammend.component';
import { TrunkingList2Component } from './trunking-list2/trunking-list2.component';


@NgModule({
  declarations: [
    AppComponent,
    TrunkingListComponent,
    HeaderComponent,
    TrunkingAddComponent,
    LoginComponent,
    TrunkingAmmendComponent,
    TrunkingList2Component
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    MatCardModule,
    AgGridModule.withComponents([]),
    MatButtonModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
