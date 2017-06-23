import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BuildingService } from '../../core/services';
import { Building } from '../../core/model';

@Component({
    selector: 'app-building',
    templateUrl: './building.container.html'
})
export class BuildingContainer implements OnInit {

    buildings$: Observable<Building[]>;

    constructor(private buildingService: BuildingService) { }

    ngOnInit() {
        this.buildings$ = this.buildingService.getBuildings();
    }

}
