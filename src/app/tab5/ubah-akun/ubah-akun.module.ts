import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbahAkunPageRoutingModule } from './ubah-akun-routing.module';

import { UbahAkunPage } from './ubah-akun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbahAkunPageRoutingModule
  ],
  declarations: [UbahAkunPage]
})
export class UbahAkunPageModule {}
