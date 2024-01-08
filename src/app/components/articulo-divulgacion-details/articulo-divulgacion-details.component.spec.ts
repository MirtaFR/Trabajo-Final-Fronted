import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDivulgacionDetailsComponent } from './articulo-divulgacion-details.component';

describe('ArticuloDivulgacionDetailsComponent', () => {
  let component: ArticuloDivulgacionDetailsComponent;
  let fixture: ComponentFixture<ArticuloDivulgacionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloDivulgacionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloDivulgacionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
