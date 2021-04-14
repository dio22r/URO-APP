import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-form-project",
  templateUrl: "./form-project.component.html",
  styleUrls: ["./form-project.component.scss"],
})
export class FormProjectComponent implements OnInit {
  @Input() id: any;

  constructor() {}

  ngOnInit() {
    console.log("test cp");
  }
}
