import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarPage } from './daftar.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarPage
  },
  {
    path: 'notifikasi',
    loadChildren: () => import('./notifikasi/notifikasi.module').then( m => m.NotifikasiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarPageRoutingModule {}
