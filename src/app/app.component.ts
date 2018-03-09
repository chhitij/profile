import { Component } from "@angular/core";
import { CommonService } from "./service/service.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private commonService: CommonService) {}

  onClick() {
    let user = {
      name: "chhitij",
      lastName: "shrivastava"
    };
    this.commonService.newEvent({ user: user });
  }
  title = "CodeSandbox";
}
