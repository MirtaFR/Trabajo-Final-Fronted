import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstanciasComponent } from './add-estancias.component';

describe('AddEstanciasComponent', () => {
  let component: AddEstanciasComponent;
  let fixture: ComponentFixture<AddEstanciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEstanciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEstanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
