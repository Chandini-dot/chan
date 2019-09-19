import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LognewComponent } from './lognew.component';

describe('LognewComponent', () => {
  let component: LognewComponent;
  let fixture: ComponentFixture<LognewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LognewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LognewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
