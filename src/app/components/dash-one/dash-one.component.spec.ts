import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashOneComponent } from './dash-one.component';

describe('DashOneComponent', () => {
  let component: DashOneComponent;
  let fixture: ComponentFixture<DashOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
