import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNuevaPasswordComponent } from './add-nueva-password.component';

describe('AddNuevaPasswordComponent', () => {
  let component: AddNuevaPasswordComponent;
  let fixture: ComponentFixture<AddNuevaPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNuevaPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNuevaPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
