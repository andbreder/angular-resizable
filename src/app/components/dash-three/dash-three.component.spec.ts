import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashThreeComponent } from './dash-three.component';

describe('DashThreeComponent', () => {
  let component: DashThreeComponent;
  let fixture: ComponentFixture<DashThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
