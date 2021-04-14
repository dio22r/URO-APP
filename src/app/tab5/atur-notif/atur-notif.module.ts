import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AturNotifPageRoutingModule } from './atur-notif-routing.module';

import { AturNotifPage } from './atur-notif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AturNotifPageRoutingModule
  ],
  declarations: [AturNotifPage]
})
export class AturNotifPageModule {}
