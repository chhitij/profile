import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class CommonService {
  private subject = new Subject<any>();

  newEvent(event) {
    this.subject.next(event);
  }

  get events$() {
    return this.subject;
  }
}
