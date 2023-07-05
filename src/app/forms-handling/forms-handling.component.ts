import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-handling',
  templateUrl: './forms-handling.component.html',
  styleUrls: ['./forms-handling.component.css']
})
export class FormsHandlingComponent implements OnInit {
  @ViewChild('Frm') formdata: NgForm
  fusername: string;
  femail: string;
  constructor() { }

  ngOnInit(): void {
  }
  FormSubmit()
  {
    this.fusername = this.formdata.value.username;
    this.femail = this.formdata.value.email;
  }
}
