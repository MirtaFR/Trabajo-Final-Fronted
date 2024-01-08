import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevistaIndexadoListComponent } from './revista-indexado-list.component';

describe('RevistaIndexadoListComponent', () => {
  let component: RevistaIndexadoListComponent;
  let fixture: ComponentFixture<RevistaIndexadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevistaIndexadoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevistaIndexadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
