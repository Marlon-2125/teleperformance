import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from "@angular/material/dialog";

import { NavigationComponent } from './navigationBar/navigationBar.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog.component';

@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [
        RouterModule,
        MatDialogModule
      ],
    exports: [
        NavigationComponent
    ]
  })
  export class SharedModule {
    
    constructor() {

    }

    // mostrarDialogo(): void {
    //   this.dialogo
    //     .open(ConfirmDialogComponent, {
    //       data: `¿Te gusta programar en TypeScript?`
    //     })
    //     .afterClosed()
    //     .subscribe((confirmado: Boolean) => {
    //       if (confirmado) {
    //         alert("¡A mí también!");
    //       } else {
    //         alert("Deberías probarlo, a mí me gusta :)");
    //       }
    //     });
    // }


   }
  