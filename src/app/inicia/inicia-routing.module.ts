import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciaPage } from './inicia.page';

const routes: Routes = [
  {
    path: '',
    component: IniciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciaPageRoutingModule {}
