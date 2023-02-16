import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoldiaconoPageRoutingModule } from './roldiacono-routing.module';

import { RoldiaconoPage } from './roldiacono.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RoldiaconoPageRoutingModule
  ],
  declarations: [RoldiaconoPage]
})
export class RoldiaconoPageModule {}
