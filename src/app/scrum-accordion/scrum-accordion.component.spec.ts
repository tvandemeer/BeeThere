import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumAccordionComponent } from './scrum-accordion.component';

describe('ScrumAccordionComponent', () => {
  let component: ScrumAccordionComponent;
  let fixture: ComponentFixture<ScrumAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrumAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrumAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
