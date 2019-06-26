import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TslaComponent } from './tsla.component';

describe('TslaComponent', () => {
  let component: TslaComponent;
  let fixture: ComponentFixture<TslaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TslaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
