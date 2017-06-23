import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FagameContainer } from './fagame.container';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ResourceContainer } from './resource/resource.container';
import { ResourceListComponent } from './resource/resource-list/resource-list.component';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        FagameContainer,
        ResourceContainer,
        MenuComponent,
        FooterComponent,
        ResourceListComponent
    ],
    exports: [
        FagameContainer
    ]
})
export class FagameModule { }
