import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePurchaseComponent } from './delete-purchase.component';

describe('DeletePurchaseComponent', () => {
  let component: DeletePurchaseComponent;
  let fixture: ComponentFixture<DeletePurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
