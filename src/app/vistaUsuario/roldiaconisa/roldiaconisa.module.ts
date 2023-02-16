import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoldiaconisaPageRoutingModule } from './roldiaconisa-routing.module';

import { RoldiaconisaPage } from './roldiaconisa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RoldiaconisaPageRoutingModule
  ],
  declarations: [RoldiaconisaPage]
})
export class RoldiaconisaPageModule {}
