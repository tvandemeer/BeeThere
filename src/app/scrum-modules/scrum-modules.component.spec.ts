import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumModulesComponent } from './scrum-modules.component';

describe('ScrumModulesComponent', () => {
  let component: ScrumModulesComponent;
  let fixture: ComponentFixture<ScrumModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrumModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrumModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
