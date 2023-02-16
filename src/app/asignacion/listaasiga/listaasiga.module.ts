import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaasigaPageRoutingModule } from './listaasiga-routing.module';

import { ListaasigaPage } from './listaasiga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListaasigaPageRoutingModule
  ],
  declarations: [ListaasigaPage]
})
export class ListaasigaPageModule {}
