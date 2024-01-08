import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGeneralListComponent } from './informacion-general-list.component';

describe('InformacionGeneralListComponent', () => {
  let component: InformacionGeneralListComponent;
  let fixture: ComponentFixture<InformacionGeneralListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionGeneralListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionGeneralListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
