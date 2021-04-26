import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AturProfilePageRoutingModule } from "./atur-profile-routing.module";

import { AturProfilePage } from "./atur-profile.page";
import { UroHeaderProfileComponent } from "../uro-header-profile/uro-header-profile.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AturProfilePageRoutingModule,
  ],
  declarations: [AturProfilePage, UroHeaderProfileComponent],
})
export class AturProfilePageModule {}
