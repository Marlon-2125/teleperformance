import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddExtraHoursComponent } from './addExtraHours/add_extra_hours.component';
import { ViewExtraHoursComponent } from './viewExtraHours/view_extra_hours.component';

@NgModule({
    declarations: [
        AddExtraHoursComponent,
        ViewExtraHoursComponent
    ],
    imports: [
        RouterModule
      ],
    exports: [
        AddExtraHoursComponent,
        ViewExtraHoursComponent
    ]
  })
  export class ComponentsModule { }
  