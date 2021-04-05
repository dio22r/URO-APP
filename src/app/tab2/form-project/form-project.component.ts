import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-form-project",
  templateUrl: "./form-project.component.html",
  styleUrls: ["./form-project.component.scss"],
})
export class FormProjectComponent implements OnInit {
  @Input() id: any;

  constructor(private modalCtrl: ModalController) {}

  async close() {
    await this.modalCtrl.dismiss();
  }

  async save() {
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {
    console.log(this.id);
  }
}
