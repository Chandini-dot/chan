import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalbumComponent } from './malbum.component';

describe('MalbumComponent', () => {
  let component: MalbumComponent;
  let fixture: ComponentFixture<MalbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
