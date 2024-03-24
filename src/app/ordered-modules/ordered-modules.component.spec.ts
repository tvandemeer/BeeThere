import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedModulesComponent } from './ordered-modules.component';

describe('OrderedModulesComponent', () => {
  let component: OrderedModulesComponent;
  let fixture: ComponentFixture<OrderedModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderedModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderedModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
