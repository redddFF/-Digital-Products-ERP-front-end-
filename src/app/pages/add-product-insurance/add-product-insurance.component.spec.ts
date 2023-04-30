import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductInsuranceComponent } from './add-product-insurance.component';

describe('AddProductInsuranceComponent', () => {
  let component: AddProductInsuranceComponent;
  let fixture: ComponentFixture<AddProductInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
