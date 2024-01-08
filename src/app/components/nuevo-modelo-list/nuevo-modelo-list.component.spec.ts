import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoModeloListComponent } from './nuevo-modelo-list.component';

describe('NuevoModeloListComponent', () => {
  let component: NuevoModeloListComponent;
  let fixture: ComponentFixture<NuevoModeloListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoModeloListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoModeloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
