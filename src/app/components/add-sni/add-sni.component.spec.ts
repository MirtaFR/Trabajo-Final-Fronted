import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSniComponent } from './add-sni.component';

describe('AddSniComponent', () => {
  let component: AddSniComponent;
  let fixture: ComponentFixture<AddSniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
