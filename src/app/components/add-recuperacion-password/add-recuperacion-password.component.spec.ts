import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecuperacionPasswordComponent } from './add-recuperacion-password.component';

describe('AddRecuperacionPasswordComponent', () => {
  let component: AddRecuperacionPasswordComponent;
  let fixture: ComponentFixture<AddRecuperacionPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecuperacionPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecuperacionPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
