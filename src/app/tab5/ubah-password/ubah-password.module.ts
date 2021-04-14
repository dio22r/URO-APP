import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbahPasswordPageRoutingModule } from './ubah-password-routing.module';

import { UbahPasswordPage } from './ubah-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbahPasswordPageRoutingModule
  ],
  declarations: [UbahPasswordPage]
})
export class UbahPasswordPageModule {}
