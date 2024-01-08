import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoModeloDetailsComponent } from './nuevo-modelo-details.component';

describe('NuevoModeloDetailsComponent', () => {
  let component: NuevoModeloDetailsComponent;
  let fixture: ComponentFixture<NuevoModeloDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoModeloDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoModeloDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
