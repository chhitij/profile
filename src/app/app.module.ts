import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { environment } from "../environments/environment";
import { CommonService } from "./service/service.component";

@NgModule({
  declarations: [AppComponent, ProjectsComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule
  ],
  providers: [AngularFireDatabase, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
