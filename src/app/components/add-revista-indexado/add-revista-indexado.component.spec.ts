import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRevistaIndexadoComponent } from './add-revista-indexado.component';

describe('AddRevistaIndexadoComponent', () => {
  let component: AddRevistaIndexadoComponent;
  let fixture: ComponentFixture<AddRevistaIndexadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRevistaIndexadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRevistaIndexadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
