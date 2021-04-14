import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbahAkunPage } from './ubah-akun.page';

const routes: Routes = [
  {
    path: '',
    component: UbahAkunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbahAkunPageRoutingModule {}
