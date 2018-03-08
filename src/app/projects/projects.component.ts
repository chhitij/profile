import { AngularFireDatabase } from "angularfire2/database";
import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent {
  projects: any[];

  constructor(private af: AngularFireDatabase) {}

  ngOnInit() {
    this.getProjects();
  }

  private getProjects() {
    this.projects = this.af.list("projects").valueChanges();
  }
}
