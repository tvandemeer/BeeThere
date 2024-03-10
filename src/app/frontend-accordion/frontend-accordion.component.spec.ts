import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendAccordionComponent } from './frontend-accordion.component';

describe('FrontendAccordionComponent', () => {
  let component: FrontendAccordionComponent;
  let fixture: ComponentFixture<FrontendAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontendAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
