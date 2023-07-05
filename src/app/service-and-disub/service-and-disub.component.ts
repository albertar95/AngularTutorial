import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-and-disub',
  templateUrl: './service-and-disub.component.html',
  styleUrls: ['./service-and-disub.component.css']
})
export class ServiceAndDISubComponent implements OnInit {
  @Input() Sth: string;
  constructor() { }

  ngOnInit(): void {
  }

}
