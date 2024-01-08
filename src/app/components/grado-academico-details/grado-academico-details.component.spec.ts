import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoAcademicoDetailsComponent } from './grado-academico-details.component';

describe('GradoAcademicoDetailsComponent', () => {
  let component: GradoAcademicoDetailsComponent;
  let fixture: ComponentFixture<GradoAcademicoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradoAcademicoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradoAcademicoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
