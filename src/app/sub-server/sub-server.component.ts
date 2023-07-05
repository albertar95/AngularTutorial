import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sub-server',
  templateUrl: './sub-server.component.html',
  styleUrls: ['./sub-server.component.css']
})
export class SubServerComponent implements OnInit {
  id: string = '';
  name: string = '';
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params["id"];
    this.name = this.router.snapshot.params["name"];
    //this section is fire when load new params from the owner page.by default angular doesnt reload the component
    this.router.params.subscribe(
      (params: Params) => {
        this.id = params["id"];
        this.name = params["name"];
      }
    );
  }
}
