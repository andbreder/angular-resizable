import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFourComponent } from './dash-four.component';

describe('DashFourComponent', () => {
  let component: DashFourComponent;
  let fixture: ComponentFixture<DashFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
