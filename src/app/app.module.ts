import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FagameModule } from './fagame/fagame.module';

import { AppComponent } from './app.component';

/* SERVICE */
import { ResourceService, BuildingService } from './core/services';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    FagameModule
  ],
  providers: [
    ResourceService,
    BuildingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
