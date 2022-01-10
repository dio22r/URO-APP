import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserauthService {
  url = "https://uroapi.dniztechno.com/";

  constructor(private http: HttpClient) {}

  checklogin(): Observable<any> {
    return this.http.get(`${this.url}api/check-login`);
  }

  login(username, password): Observable<any> {
    let formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);

    return this.http.post(`${this.url}api/login`, formData);
  }

  logout() {
    //
  }

  signup() {
    //
  }
}
