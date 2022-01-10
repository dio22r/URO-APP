import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  myPane: CupertinoPane;
  constructor(public alertController: AlertController) {}

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
    this.myPane = new CupertinoPane("#tab-tugas-drawer", settings);

    this.myPane.present({ animate: true });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: ["OK"],
    });

    this.myPane.hide();

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
    this.myPane.present();
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
}
