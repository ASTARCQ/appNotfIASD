import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUsuarioPageRoutingModule } from './create-usuario-routing.module';

import { CreateUsuarioPage } from './create-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateUsuarioPageRoutingModule
  ],
  declarations: [CreateUsuarioPage]
})
export class CreateUsuarioPageModule {}
