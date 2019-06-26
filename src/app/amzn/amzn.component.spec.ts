import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmznComponent } from './amzn.component';

describe('AmznComponent', () => {
  let component: AmznComponent;
  let fixture: ComponentFixture<AmznComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmznComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmznComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
