import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendModulesComponent } from './frontend-modules.component';

describe('FrontendModulesComponent', () => {
  let component: FrontendModulesComponent;
  let fixture: ComponentFixture<FrontendModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontendModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
