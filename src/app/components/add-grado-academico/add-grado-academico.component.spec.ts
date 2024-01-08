import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGradoAcademicoComponent } from './add-grado-academico.component';

describe('AddGradoAcademicoComponent', () => {
  let component: AddGradoAcademicoComponent;
  let fixture: ComponentFixture<AddGradoAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGradoAcademicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGradoAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
