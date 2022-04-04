import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTimesComponent } from './member-times.component';

describe('MemberTimesComponent', () => {
  let component: MemberTimesComponent;
  let fixture: ComponentFixture<MemberTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
