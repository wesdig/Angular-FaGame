import { Component, Input } from '@angular/core';
import { Resource } from '../../../core/model';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html'
})
export class ResourceListComponent {
  @Input() resources: Resource[];
}
