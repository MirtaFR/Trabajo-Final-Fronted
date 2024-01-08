import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstanciasDetailsComponent } from './estancias-details.component';

describe('EstanciasDetailsComponent', () => {
  let component: EstanciasDetailsComponent;
  let fixture: ComponentFixture<EstanciasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstanciasDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstanciasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
