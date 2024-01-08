import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoAcademicoListComponent } from './grado-academico-list.component';

describe('GradoAcademicoListComponent', () => {
  let component: GradoAcademicoListComponent;
  let fixture: ComponentFixture<GradoAcademicoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradoAcademicoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradoAcademicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
