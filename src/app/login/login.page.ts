import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserauthService } from "../service/userauth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email = "";
  password = "";
  nama = "";

  isLogin: false;
  result: Observable<any>;

  constructor(
    private userauthService: UserauthService,
    private router: Router
  ) {}

  ngOnInit() {
    let self = this;
    console.log("test");
    this.result = this.userauthService.checklogin();
    this.result.subscribe((res) => {
      if (res.is_login) {
        self.router.navigate(["/tabs/tab1"]);
      }
    });
  }

  submitLogin() {
    let self = this;
    this.result = this.userauthService.login(this.email, this.password);
    this.result.subscribe((res) => {
      if (res.is_login) {
        self.router.navigate(["/tabs/tab1"]);
      }
    });
  }
}
