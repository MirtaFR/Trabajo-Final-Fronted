import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionDetailsComponent } from './inicio-sesion-details.component';

describe('InicioSesionDetailsComponent', () => {
  let component: InicioSesionDetailsComponent;
  let fixture: ComponentFixture<InicioSesionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSesionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioSesionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
