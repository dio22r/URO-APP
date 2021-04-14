import { Component } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";

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
  myPane: CupertinoPane;

  constructor(
    private modalCtrl: ModalController,
    public alertController: AlertController
  ) {
    this.activeid = "";
  }

  ngOnInit() {
    let settings: CupertinoSettings = {
      parentElement: "body", // Parent container
      draggableOver: false,
      backdrop: true,
      buttonDestroy: false,
      bottomClose: true,
      breaks: {
        middle: { enabled: true, height: 900, bounce: true },
        bottom: { enabled: true, height: 80 },
      },
      onDrag: () => console.log("Drag event"),
      onBackdropTap: () => this.hide_drawer(),
    };
    this.myPane = new CupertinoPane(".ion-drawer", settings);
  }

  public project_click(id: any) {
    this.activeid = id;
  }

  async edit_project(id: number) {
    /**
     * 
     
    const modal = await this.modalCtrl.create({
      component: FormProjectComponent,
      componentProps: {
        id: id,
      },
    });

    await modal.present();
    */
    console.log("test");
    this.myPane.present({ animate: true });
  }

  async hide_drawer() {
    this.myPane.hide();
  }

  async delete_project(id: number) {
    const alert = await this.alertController.create({
      cssClass: "alert-class",
      message: "Apakah Anda Yakin <strong>Hapus</strong> Proyek?",
      buttons: ["Cancel", "Delete"],
    });

    await alert.present();
  }

  public toggle_show_finished() {
    this.showFinished = !this.showFinished;
    this.activeid = "";
  }
}
