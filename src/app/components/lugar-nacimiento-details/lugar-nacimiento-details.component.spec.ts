import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarNacimientoDetailsComponent } from './lugar-nacimiento-details.component';

describe('LugarNacimientoDetailsComponent', () => {
  let component: LugarNacimientoDetailsComponent;
  let fixture: ComponentFixture<LugarNacimientoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugarNacimientoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugarNacimientoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
