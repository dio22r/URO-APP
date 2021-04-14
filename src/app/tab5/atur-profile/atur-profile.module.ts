import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AturProfilePageRoutingModule } from './atur-profile-routing.module';

import { AturProfilePage } from './atur-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AturProfilePageRoutingModule
  ],
  declarations: [AturProfilePage]
})
export class AturProfilePageModule {}
