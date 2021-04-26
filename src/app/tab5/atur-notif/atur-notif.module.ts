import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AturNotifPageRoutingModule } from "./atur-notif-routing.module";

import { AturNotifPage } from "./atur-notif.page";
import { UroHeaderProfileComponent } from "../uro-header-profile/uro-header-profile.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AturNotifPageRoutingModule],
  declarations: [AturNotifPage, UroHeaderProfileComponent],
})
export class AturNotifPageModule {}
