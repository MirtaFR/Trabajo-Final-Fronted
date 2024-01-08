import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionListComponent } from './inicio-sesion-list.component';

describe('InicioSesionListComponent', () => {
  let component: InicioSesionListComponent;
  let fixture: ComponentFixture<InicioSesionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSesionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioSesionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
