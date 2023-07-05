import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-data-binding-test',
  templateUrl: './data-binding-test.component.html',
  styleUrls: ['./data-binding-test.component.css']
})
export class DataBindingTestComponent implements OnInit {
  Sth = '';
  SthArray = [];
  SetBtn = 0;
  @Output() SthCreated = new EventEmitter<{ createdSth: string }>();
  @ViewChild('txtSth') txtSth2: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  CreateSth()
  {
    if (this.Sth != '')
    {
      this.SthArray.push(this.Sth);
      this.SthCreated.emit({ createdSth: this.Sth });
      this.Sth = '';
      this.SetBtn = 1;
    }
  }
  CreateSth2(txtSth: HTMLInputElement) {
    if (txtSth.value != '') {
      this.SthArray.push(txtSth.value);
      this.SthCreated.emit({ createdSth: txtSth.value });
      txtSth.value = '';
      this.SetBtn = 2;
    }
  }
  CreateSth3() {
    if (this.txtSth2.nativeElement.value != '') {
      this.SthArray.push(this.txtSth2.nativeElement.value);
      this.SthCreated.emit({ createdSth: this.txtSth2.nativeElement.value });
      this.txtSth2.nativeElement.value = '';
      this.SetBtn = 3;
    }
  }
}
