import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarNacimientoListComponent } from './lugar-nacimiento-list.component';

describe('LugarNacimientoListComponent', () => {
  let component: LugarNacimientoListComponent;
  let fixture: ComponentFixture<LugarNacimientoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugarNacimientoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugarNacimientoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
