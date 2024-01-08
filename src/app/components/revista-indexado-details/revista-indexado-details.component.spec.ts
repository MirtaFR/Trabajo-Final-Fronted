import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevistaIndexadoDetailsComponent } from './revista-indexado-details.component';

describe('RevistaIndexadoDetailsComponent', () => {
  let component: RevistaIndexadoDetailsComponent;
  let fixture: ComponentFixture<RevistaIndexadoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevistaIndexadoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevistaIndexadoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
