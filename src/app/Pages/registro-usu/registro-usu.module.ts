import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUsuPageRoutingModule } from './registro-usu-routing.module';

import { RegistroUsuPage } from './registro-usu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistroUsuPageRoutingModule
  ],
  declarations: [RegistroUsuPage]
})
export class RegistroUsuPageModule {}
