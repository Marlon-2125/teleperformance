import { Component } from '@angular/core';

import { Extra_Hours } from '../../models/extra_hours';

@Component({
    selector: 'add-extra-hours-app',
    templateUrl: './add_extra_hours.component.html',
    styleUrls: ['./add_extra_hours.component.css']
})
export class AddExtraHoursComponent{
    extra: Extra_Hours;
    extrasList: [];

    constructor (){
        this.extra = new Extra_Hours('A','B','C','D','E','F','G','H','I','J');           
    }

    ngOnIniti(){
        
    }

    addExtraHour(){

    }

}