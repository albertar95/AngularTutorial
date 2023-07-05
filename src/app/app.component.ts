import { Component } from '@angular/core';
import { PersistenceService } from './Services/Persistence.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tutorial1';
  constructor(private Persistence: PersistenceService)
  {
    /*Persistence.AddSthClicked.subscribe((eventName: string) => alert('subscribed from app with service.trigger event : ' + eventName));*/
  }
  onSthCreated(sthData:{ createdSth: string })
  {
    alert('sth created with title of ' + sthData.createdSth)
  }
}
