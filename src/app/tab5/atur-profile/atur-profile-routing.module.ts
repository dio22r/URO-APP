import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AturProfilePage } from './atur-profile.page';

const routes: Routes = [
  {
    path: '',
    component: AturProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AturProfilePageRoutingModule {}
