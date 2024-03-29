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
import { TrunkingAmendComponent } from './trunking-amend/trunking-amend.component';
import { TrunkingList2Component } from './trunking-list2/trunking-list2.component';
import { TrunkingList3Component } from './trunking-list3/trunking-list3.component';
import { TrunkingAdd1Component } from './trunking-add1/trunking-add1.component';
import { TrunkingAdd2Component } from './trunking-add2/trunking-add2.component';


@NgModule({
  declarations: [
    AppComponent,
    TrunkingListComponent,
    HeaderComponent,
    TrunkingAddComponent,
    LoginComponent,
    TrunkingAmendComponent,
    TrunkingList2Component,
    TrunkingList3Component,
    TrunkingAdd1Component,
    TrunkingAdd2Component
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
