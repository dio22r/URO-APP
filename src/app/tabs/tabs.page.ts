import { Component } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage {
  tabButton = [
    {
      name: "tab1",
      label: "Rekan",
    },
    {
      name: "tab2",
      label: "Proyek",
    },
    {
      name: "tab3",
      label: "Tugas",
    },
    {
      name: "tab4",
      label: "Notifikasi",
    },
    {
      name: "tab5",
      label: "Profile",
    },
  ];

  tabActive = 0;

  constructor() {}
}
