import { Component, ViewChild } from '@angular/core';
import 'rxjs/add/operator/map';

import { ExtraHoursService } from 'src/app/service/extra.service';
import { ExtraHours } from 'src/app/models/extraHours';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
    selector: 'view-extra-hours-app',
    templateUrl: './view_extra_hours.component.html',
    styleUrls: ['./view_extra_hours.component.css'],
    providers: [ExtraHoursService]
})

export class ViewExtraHoursComponent {

    extraHoursTable: MatTableDataSource<ExtraHours>;
    paginatorSize: Number;
    
    
    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns : String [] = [
        'document',
        'fullname',
        'contract',
        'worktime',
        'extratime',
        'comments',
        'actions'
    ]

    constructor(private extraHoursService: ExtraHoursService) {
        
    }

    ngOnInit() {
        this.extraHoursTable = new MatTableDataSource();
        this.findExtraHours();      
    }

    findExtraHours() {
        this.extraHoursService.getExtraHours()
        .map((hours: ExtraHours[]) => {
            console.log(`The extra hours loaded were: ${JSON.stringify(hours)}`)
            return hours
        }).subscribe(response => {
            this.configTable(response) 
        });
    }
    
    configTable(dataExtraHours:ExtraHours[]) {
        this.extraHoursTable.data = dataExtraHours;
        this.paginatorSize = dataExtraHours.length;
        this.extraHoursTable.paginator = this.paginator;
        this.paginator._intl.itemsPerPageLabel = 'Items por página:';
        this.paginator._intl.previousPageLabel = 'Anterior';
        this.paginator._intl.nextPageLabel = 'Siguiente';
    }

}