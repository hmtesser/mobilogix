import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { HomeComponent } from '../page/home/home.component'

import { BoxComponent } from '../assets/box/box.component'

import { MapsComponent } from '../maps/maps.component'

import { GoogleMapsModule } from '@angular/google-maps'

import { VehiclesComponent } from '../page/vehicles/vehicles.component';

import { DevicesComponent } from '../page/devices/devices.component'

import { BoxInfoComponent } from '../assets/box-info/box-info.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [FolderPage,HomeComponent,BoxComponent,MapsComponent,DevicesComponent,VehiclesComponent,BoxInfoComponent]
})
export class FolderPageModule {}
