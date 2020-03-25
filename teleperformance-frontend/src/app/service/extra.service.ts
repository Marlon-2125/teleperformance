import {Injectable} from  '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExtraHours } from '../models/ExtraHours';

import { Observable } from 'rxjs';

@Injectable()
export class ExtraHoursService {

    public URL_API = 'http://localhost:3000/api/extra';

    constructor(private _http: HttpClient){

    }

    getExtraHours(): Observable<ExtraHours[]> {

        console.log(`The Extra hours service sent the request [GET => ${this.URL_API}] and is waiting for an answer`);

        return this._http.get<ExtraHours[]>(this.URL_API);

    }

    deleteExtraHours(_id: string){
        
        return this._http.delete(this.URL_API + "/delete/" + _id);

    }

    // postExtraHours(extras: ExtraHours){
    //     return this.http.put(this.URL_API, extras);
    // }

    // putExtraHours(extras: Extra_Hours){
    //     return this.http.put(this.URL_API + '/{$extras._id}', extras);
    // }

    
    
}