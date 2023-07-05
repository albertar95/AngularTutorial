import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-test-sub',
  templateUrl: './data-binding-test-sub.component.html',
  styleUrls: ['./data-binding-test-sub.component.css']
})
export class DataBindingTestSubComponent implements OnInit {
  @Input() SthValue = '';
  constructor() { }

  ngOnInit(): void {
  }

}
