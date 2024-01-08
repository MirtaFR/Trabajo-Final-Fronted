import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoDetailsComponent } from './proyecto-details.component';

describe('ProyectoDetailsComponent', () => {
  let component: ProyectoDetailsComponent;
  let fixture: ComponentFixture<ProyectoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
