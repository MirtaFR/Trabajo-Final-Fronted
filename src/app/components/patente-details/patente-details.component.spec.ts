import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatenteDetailsComponent } from './patente-details.component';

describe('PatenteDetailsComponent', () => {
  let component: PatenteDetailsComponent;
  let fixture: ComponentFixture<PatenteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatenteDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatenteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
