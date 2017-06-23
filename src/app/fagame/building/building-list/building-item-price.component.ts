
import { OnInit, Component, Input } from '@angular/core';
import { Level, Price } from '../../../core/model';

@Component({
    selector: 'app-building-item-price',
    template: `
        <ul>
            <li *ngFor="let price of currentPrices">
                <strong>{{ price.name }} : </strong> {{ price.amount }}
            </li>
        </ul>
    `
})
export class BuildingItemPriceComponent implements OnInit {
    @Input() levels: Level[];
    @Input() currentLevel: number;

    currentPrices: Price[];

    ngOnInit() {
        this.levels.forEach((level) => {
            if (level.level === (this.currentLevel + 1 )) {
                this.currentPrices = level.prices;
            }
        });
    }
}
