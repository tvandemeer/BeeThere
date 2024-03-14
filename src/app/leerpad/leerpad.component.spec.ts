import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerpadComponent } from './leerpad.component';

describe('LeerpadComponent', () => {
  let component: LeerpadComponent;
  let fixture: ComponentFixture<LeerpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeerpadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeerpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
