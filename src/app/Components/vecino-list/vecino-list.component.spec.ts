import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VecinoListComponent } from './vecino-list.component';

describe('VecinoListComponent', () => {
  let component: VecinoListComponent;
  let fixture: ComponentFixture<VecinoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VecinoListComponent]
    });
    fixture = TestBed.createComponent(VecinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
