import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PersistenceService } from '../Services/Persistence.Service';

@Component({
  selector: 'app-service-and-di',
  templateUrl: './service-and-di.component.html',
  styleUrls: ['./service-and-di.component.css']
})
export class ServiceAndDIComponent implements OnInit {
  @ViewChild('txtSth') Sth: ElementRef;
  Sths: string[] = [];
  txtSearch: string = '';
  constructor(private persistence: PersistenceService) { }

  ngOnInit(): void {
    this.Sths = this.persistence.Sths;
  }
  AddSthEvent()
  {
    this.persistence.AddToList(this.Sth.nativeElement.value);
    this.persistence.AddSthClicked.emit(this.Sth.nativeElement.value);
    this.Sth.nativeElement.value = '';
  }

}
