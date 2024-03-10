import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendAccordionComponent } from './backend-accordion.component';

describe('BackendAccordionComponent', () => {
  let component: BackendAccordionComponent;
  let fixture: ComponentFixture<BackendAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackendAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
