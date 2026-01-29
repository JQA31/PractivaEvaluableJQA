import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuntaComponent } from './junta.component';

describe('JuntaComponent', () => {
  let component: JuntaComponent;
  let fixture: ComponentFixture<JuntaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuntaComponent]
    });
    fixture = TestBed.createComponent(JuntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
