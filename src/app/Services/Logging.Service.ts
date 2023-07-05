import { Injectable } from "@angular/core";

@Injectable()
export class MyLoggingService
{
  LogThisEvent(eventName: string) {
    console.log('this is come from logging service.trigger event name : ' + eventName);
  }
}
