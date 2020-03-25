import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddExtraHoursComponent } from './addExtraHours/add_extra_hours.component';
import { ViewExtraHoursComponent } from './viewExtraHours/view_extra_hours.component';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatIconModule } from '@angular/material/icon'; 
import { MatDialogModule } from '@angular/material/dialog';

import { ExtraHoursService } from '../service/extra.service';

@NgModule({
  declarations: [
      AddExtraHoursComponent,
      ViewExtraHoursComponent,
  ],
  imports: [
      BrowserModule,
      RouterModule,
      MatTableModule,
      MatPaginatorModule,
      NgxMaterialTimepickerModule,
      MatIconModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      MatDialogModule
  ],
  exports: [
      AddExtraHoursComponent,
      ViewExtraHoursComponent,
  ],
  providers: [ExtraHoursService]
})
export class ComponentsModule { }

  