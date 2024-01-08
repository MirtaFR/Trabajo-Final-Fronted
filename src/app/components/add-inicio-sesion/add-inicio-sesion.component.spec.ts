import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInicioSesionComponent } from './add-inicio-sesion.component';

describe('AddInicioSesionComponent', () => {
  let component: AddInicioSesionComponent;
  let fixture: ComponentFixture<AddInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInicioSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
