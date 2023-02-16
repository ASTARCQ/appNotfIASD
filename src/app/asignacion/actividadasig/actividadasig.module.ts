import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadasigPageRoutingModule } from './actividadasig-routing.module';

import { ActividadasigPage } from './actividadasig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ActividadasigPageRoutingModule
  ],
  declarations: [ActividadasigPage]
})
export class ActividadasigPageModule {}
