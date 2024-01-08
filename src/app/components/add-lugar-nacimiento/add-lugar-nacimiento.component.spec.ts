import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLugarNacimientoComponent } from './add-lugar-nacimiento.component';

describe('AddLugarNacimientoComponent', () => {
  let component: AddLugarNacimientoComponent;
  let fixture: ComponentFixture<AddLugarNacimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLugarNacimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLugarNacimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
