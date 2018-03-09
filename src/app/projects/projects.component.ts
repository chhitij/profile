import { AngularFireDatabase } from "angularfire2/database";
import { Component, OnDestroy } from "@angular/core";
import { CommonService } from "../service/service.component";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnDestroy {
  projects: any[];

  constructor(
    private af: AngularFireDatabase,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.getProjects();
  }

  private getProjects() {
    this.projects = this.af.list("projects").valueChanges();
    this.commonService.events$.subscribe(evt =>
      console.log("clicke event from app componet", evt)
    );
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
