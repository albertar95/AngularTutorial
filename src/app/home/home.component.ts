import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onNavClick()
  {
    this.router.navigate(['/server'], {queryParams: { qtest: 1 }});
  }
  onNavClickChild() {
    this.router.navigate(['server'], { relativeTo: this.activeRoute }); //it adds server to the current route loaded.
  }
}
