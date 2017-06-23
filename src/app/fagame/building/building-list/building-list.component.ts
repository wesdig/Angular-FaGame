import { Component, Input } from '@angular/core';
import { Building } from '../../../core/model';

@Component({
    selector: 'app-building-list',
    templateUrl: './building-list.component.html'
})
export class BuildingListComponent {
    @Input() buildings: Building[];
}
