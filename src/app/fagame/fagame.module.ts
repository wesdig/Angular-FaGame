import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FagameContainer } from './fagame.container';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

import { ResourceContainer } from './resource/resource.container';
import { ResourceListComponent } from './resource/resource-list/resource-list.component';

import { BuildingContainer } from './building/building.container';
import { BuildingListComponent } from './building/building-list/building-list.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        FagameContainer,
        MenuComponent,
        FooterComponent,
        ResourceContainer,
        ResourceListComponent,
        BuildingContainer,
        BuildingListComponent
    ],
    exports: [
        FagameContainer
    ]
})
export class FagameModule { }
