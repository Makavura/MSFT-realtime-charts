import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglComponent } from './googl.component';

describe('GooglComponent', () => {
  let component: GooglComponent;
  let fixture: ComponentFixture<GooglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
