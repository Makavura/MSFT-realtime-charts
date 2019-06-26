import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsftComponent } from './msft.component';

describe('MsftComponent', () => {
  let component: MsftComponent;
  let fixture: ComponentFixture<MsftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
