import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { KaryawanService } from "../service/karyawan.service";
import { UserauthService } from "../service/userauth.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  rekan = [
    {
      id: "001",
      nama: "Marshella Novi",
      role: "UI Designer",
    },
    {
      id: "002",
      nama: "Dennis Kristanto",
      role: "DBA",
    },
    {
      id: "003",
      nama: "Dio Ratar",
      role: "Programmer",
    },
    {
      id: "001",
      nama: "Marshella Novi",
      role: "UI Designer",
    },
    {
      id: "002",
      nama: "Dennis Kristanto",
      role: "DBA",
    },
    {
      id: "003",
      nama: "Dio Ratar",
      role: "Programmer",
    },
    {
      id: "001",
      nama: "Marshella Novi",
      role: "UI Designer",
    },
    {
      id: "002",
      nama: "Dennis Kristanto",
      role: "DBA",
    },
    {
      id: "003",
      nama: "Dio Ratar",
      role: "Programmer",
    },
    {
      id: "001",
      nama: "Marshella Novi",
      role: "UI Designer",
    },
    {
      id: "002",
      nama: "Dennis Kristanto",
      role: "DBA",
    },
    {
      id: "003",
      nama: "Dio Ratar",
      role: "Programmer",
    },
    {
      id: "001",
      nama: "Marshella Novi",
      role: "UI Designer",
    },
    {
      id: "002",
      nama: "Dennis Kristanto",
      role: "DBA",
    },
    {
      id: "003",
      nama: "Dio Ratar",
      role: "Programmer",
    },
    {
      id: "001",
      nama: "Marshella Novi",
      role: "UI Designer",
    },
    {
      id: "002",
      nama: "Dennis Kristanto",
      role: "DBA",
    },
    {
      id: "003",
      nama: "Dio Ratar",
      role: "Programmer",
    },
    {
      id: "001",
      nama: "Marshella Novi",
      role: "UI Designer",
    },
    {
      id: "002",
      nama: "Dennis Kristanto",
      role: "DBA",
    },
    {
      id: "003",
      nama: "Dio Ratar",
      role: "Programmer",
    },
    {
      id: "001",
      nama: "Marshella Novi",
      role: "UI Designer",
    },
    {
      id: "002",
      nama: "Dennis Kristanto",
      role: "DBA",
    },
    {
      id: "003",
      nama: "Dio Ratar",
      role: "Programmer",
    },
  ];

  isLogin: false;
  result: Observable<any>;

  constructor(
    private karyawanService: KaryawanService,
    private router: Router
  ) {}

  ngOnInit() {
    let self = this;

    this.result = this.karyawanService.all();
    this.result.subscribe(
      (res) => {
        if (!res.is_login) {
          self.router.navigate(["/login"]);
        }
        console.log(res);
        self.rekan = res.data;
      },
      (err) => {
        console.log("app not connected");
      }
    );
  }

  onKeyEnter() {
    let self = this;
    console.log("enter");
  }
}
