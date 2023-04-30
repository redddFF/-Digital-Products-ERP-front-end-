import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductBankComponent } from './add-product-bank.component';

describe('AddProductBankComponent', () => {
  let component: AddProductBankComponent;
  let fixture: ComponentFixture<AddProductBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
