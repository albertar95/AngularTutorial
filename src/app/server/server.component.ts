import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverName = 'default server name';
  addServerAllowed = false;
  addServerResult = '';
  nameChangeResult = '';
  qtest = '';
  constructor(private router: ActivatedRoute)
  {
    setTimeout(() =>
    {
      this.addServerAllowed = true;
    }, 2000);
  }

  ngOnInit(): void {
    this.qtest = this.router.queryParams["qtest"];
    this.router.queryParams.subscribe((params: Params) => { this.qtest =  params["qtest"]});
  }
  onAddServerClick(event: any)
  {
    this.addServerResult = 'server created by user ';
  }
  serverNameChange()
  {
    this.nameChangeResult = 'new server name is : ' + this.serverName;
  }

  //directives

  serverNames = [];

  addNewServerWithName()
  {
    this.serverNames.push('1');
    this.addServerAllowed = true;
  }
  getcolor()
  {
    return 'red';
  }
}
