import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigationBar/navigationBar.component';

@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [
        RouterModule
      ],
    exports: [
        NavigationComponent
    ]
  })
  export class SharedModule { }
  