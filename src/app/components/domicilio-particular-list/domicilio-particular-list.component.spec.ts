import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicilioParticularListComponent } from './domicilio-particular-list.component';

describe('DomicilioParticularListComponent', () => {
  let component: DomicilioParticularListComponent;
  let fixture: ComponentFixture<DomicilioParticularListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomicilioParticularListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomicilioParticularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
