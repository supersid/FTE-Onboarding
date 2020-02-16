import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForm11Component } from './user-form11.component';

describe('UserForm11Component', () => {
  let component: UserForm11Component;
  let fixture: ComponentFixture<UserForm11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserForm11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserForm11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
