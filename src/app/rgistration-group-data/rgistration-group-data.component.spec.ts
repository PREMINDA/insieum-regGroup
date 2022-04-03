import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgistrationGroupDataComponent } from './rgistration-group-data.component';

describe('RgistrationGroupDataComponent', () => {
  let component: RgistrationGroupDataComponent;
  let fixture: ComponentFixture<RgistrationGroupDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgistrationGroupDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgistrationGroupDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
