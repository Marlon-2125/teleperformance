import {Injectable} from  '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Extra_Hours } from '../models/extra_hours';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExtraService {

    selectedExtra = Extra_Hours;
    extrasHours = [];

    public URL_API = 'http://localhost:3000/api/extra';

    constructor(private http: HttpClient){

    }

    getExtraHours(){
        return this.http.get(this.URL_API);
    }

    postExtraHours(extras: Extra_Hours){
        return this.http.put(this.URL_API, extras);
    }

    putExtraHours(extras: Extra_Hours){
        return this.http.put(this.URL_API + '/{$extras._id}', extras);
    }

    
    deleteExtraHours(_id: string){
        return this.http.delete(this.URL_API + '/${_id}');
    }
}