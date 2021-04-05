import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { FormProjectComponent } from "./form-project/form-project.component";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  project = [
    {
      id: "001",
      nama: "Apps Project 1",
      owner: "Dniz Company",
      isFinished: false,
    },
    {
      id: "002",
      nama: "Menejemen Arsip",
      owner: "facebook inc.",
      isFinished: false,
    },
    {
      id: "003",
      nama: "Big Data Analyst",
      owner: "Gojek Corp",
      isFinished: false,
    },
    {
      id: "004",
      nama: "Network Monitoring",
      owner: "Pemkab. Minsel",
      isFinished: false,
    },
    {
      id: "005",
      nama: "Networking Apps",
      owner: "facebook inc.",
      isFinished: true,
    },
  ];

  activeid = "";
  showFinished = false;

  constructor(private modalCtrl: ModalController) {
    this.activeid = "";
  }

  public project_click(id: any) {
    this.activeid = id;
  }

  async edit_project(id: number) {
    console.log("edit " + id);
    const modal = await this.modalCtrl.create({
      component: FormProjectComponent,
      componentProps: {
        id: id,
      },
    });

    await modal.present();
  }

  public delete_project(id: number) {
    console.log("delete " + id);
  }

  public toggle_show_finished() {
    this.showFinished = !this.showFinished;
    this.activeid = "";
  }
}
