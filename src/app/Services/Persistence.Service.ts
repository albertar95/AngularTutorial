import { EventEmitter, Injectable } from "@angular/core";
import { MyLoggingService } from "./Logging.Service";
@Injectable()
export class PersistenceService
{
  constructor(private LoggingService: MyLoggingService)
  {

  }
  Sths: string[] = [];
  AddSthClicked = new EventEmitter<string>();
  AddToList(item: string) {
    this.Sths.push(item);
    this.LoggingService.LogThisEvent(item);
  }
  RemoveFromList(item: string) {
    this.Sths.splice(this.Sths.indexOf(item));
    this.LoggingService.LogThisEvent(item);
  }
}
