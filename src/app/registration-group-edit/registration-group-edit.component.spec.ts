import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationGroupEditComponent } from './registration-group-edit.component';

describe('RegistrationGroupEditComponent', () => {
  let component: RegistrationGroupEditComponent;
  let fixture: ComponentFixture<RegistrationGroupEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationGroupEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
