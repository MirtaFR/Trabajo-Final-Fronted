import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGeneralDetailsComponent } from './informacion-general-details.component';

describe('InformacionGeneralDetailsComponent', () => {
  let component: InformacionGeneralDetailsComponent;
  let fixture: ComponentFixture<InformacionGeneralDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionGeneralDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionGeneralDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
