import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciaPageRoutingModule } from './inicia-routing.module';

import { IniciaPage } from './inicia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciaPageRoutingModule
  ],
  declarations: [IniciaPage]
})
export class IniciaPageModule {}
