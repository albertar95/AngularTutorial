import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTutoComponent } from './routing-tuto.component';

describe('RoutingTutoComponent', () => {
  let component: RoutingTutoComponent;
  let fixture: ComponentFixture<RoutingTutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingTutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingTutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
