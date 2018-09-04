import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainblockComponent } from './mainblock.component';

describe('MainblockComponent', () => {
  let component: MainblockComponent;
  let fixture: ComponentFixture<MainblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
