import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNuevoModeloComponent } from './add-nuevo-modelo.component';

describe('AddNuevoModeloComponent', () => {
  let component: AddNuevoModeloComponent;
  let fixture: ComponentFixture<AddNuevoModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNuevoModeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNuevoModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
