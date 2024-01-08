import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInformacionGeneralComponent } from './add-informacion-general.component';

describe('AddInformacionGeneralComponent', () => {
  let component: AddInformacionGeneralComponent;
  let fixture: ComponentFixture<AddInformacionGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInformacionGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInformacionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
