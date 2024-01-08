import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicilioParticularDetailsComponent } from './domicilio-particular-details.component';

describe('DomicilioParticularDetailsComponent', () => {
  let component: DomicilioParticularDetailsComponent;
  let fixture: ComponentFixture<DomicilioParticularDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomicilioParticularDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomicilioParticularDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
