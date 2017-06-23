import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Building } from '../model/';

@Injectable()
export class BuildingService {

    constructor(private http: Http) { }

    getBuildings(): Observable<Building[]> {
        return this.http.get('assets/building.json')
            .map((resp): Building[] => resp.json());
    }
}
