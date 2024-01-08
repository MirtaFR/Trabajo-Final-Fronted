import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDivulgacionListComponent } from './articulo-divulgacion-list.component';

describe('ArticuloDivulgacionListComponent', () => {
  let component: ArticuloDivulgacionListComponent;
  let fixture: ComponentFixture<ArticuloDivulgacionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloDivulgacionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloDivulgacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
