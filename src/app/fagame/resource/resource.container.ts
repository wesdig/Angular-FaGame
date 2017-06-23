import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ResourceService } from '../../core/services';
import { Resource } from '../../core/model';


@Component({
    selector: 'app-resource',
    templateUrl: './resource.container.html'
})
export class ResourceContainer implements OnInit {

    resources$: Observable<Resource[]>;

    constructor(private resourceService: ResourceService) { }

    ngOnInit() {
        this.resources$ = this.resourceService.getResources();
    }
}
