import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatenteComponent } from './add-patente.component';

describe('AddPatenteComponent', () => {
  let component: AddPatenteComponent;
  let fixture: ComponentFixture<AddPatenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPatenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
