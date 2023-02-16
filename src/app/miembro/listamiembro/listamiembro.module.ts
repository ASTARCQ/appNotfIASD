import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListamiembroPageRoutingModule } from './listamiembro-routing.module';

import { ListamiembroPage } from './listamiembro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListamiembroPageRoutingModule
  ],
  declarations: [ListamiembroPage]
})
export class ListamiembroPageModule {}
