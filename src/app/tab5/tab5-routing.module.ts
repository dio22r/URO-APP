import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Tab5Page } from "./tab5.page";

const routes: Routes = [
  {
    path: "",
    component: Tab5Page,
  },
  {
    path: "ubah-akun",
    loadChildren: () =>
      import("./ubah-akun/ubah-akun.module").then((m) => m.UbahAkunPageModule),
  },
  {
    path: "atur-profile",
    loadChildren: () =>
      import("./atur-profile/atur-profile.module").then(
        (m) => m.AturProfilePageModule
      ),
  },
  {
    path: "ubah-password",
    loadChildren: () =>
      import("./ubah-password/ubah-password.module").then(
        (m) => m.UbahPasswordPageModule
      ),
  },
  {
    path: "atur-notif",
    loadChildren: () =>
      import("./atur-notif/atur-notif.module").then(
        (m) => m.AturNotifPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5PageRoutingModule {}
