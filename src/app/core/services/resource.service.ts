import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


import { Resource } from '../model/resource.model';

@Injectable()
export class ResourceService {

    constructor(private http: Http) { }

    getResources(): Observable<Resource[]> {
        return this.http.get('assets/resource.json')
            .map((resp): Resource[] => resp.json());
    }
}