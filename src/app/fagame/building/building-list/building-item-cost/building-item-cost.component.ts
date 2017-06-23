import { Component, Input } from '@angular/core';
import { Building } from '../../../../core/model';

@Component({
    selector: 'app-building-item-cost',
    templateUrl: './building-list.component.html'
})
export class BuildingListComponent {
    @Input() building: Building;
    
}
