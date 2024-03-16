import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathCardComponent } from './path-card.component';

describe('PathCardComponent', () => {
  let component: PathCardComponent;
  let fixture: ComponentFixture<PathCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PathCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
