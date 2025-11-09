import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTable } from './subscription-table';

describe('SubscriptionTable', () => {
  let component: SubscriptionTable;
  let fixture: ComponentFixture<SubscriptionTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
