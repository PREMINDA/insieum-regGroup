import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationGroupPageComponent } from './registration-group-page.component';

describe('RegistrationGroupPageComponent', () => {
  let component: RegistrationGroupPageComponent;
  let fixture: ComponentFixture<RegistrationGroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationGroupPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
