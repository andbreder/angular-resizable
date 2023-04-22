import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTwoComponent } from './dash-two.component';

describe('DashTwoComponent', () => {
  let component: DashTwoComponent;
  let fixture: ComponentFixture<DashTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
