import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendModulesComponent } from './backend-modules.component';

describe('BackendModulesComponent', () => {
  let component: BackendModulesComponent;
  let fixture: ComponentFixture<BackendModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackendModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
