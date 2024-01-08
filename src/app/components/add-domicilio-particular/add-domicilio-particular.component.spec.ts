import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDomicilioParticularComponent } from './add-domicilio-particular.component';

describe('AddDomicilioParticularComponent', () => {
  let component: AddDomicilioParticularComponent;
  let fixture: ComponentFixture<AddDomicilioParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDomicilioParticularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDomicilioParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
