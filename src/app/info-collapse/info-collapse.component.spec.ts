import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCollapseComponent } from './info-collapse.component';

describe('InfoCollapseComponent', () => {
  let component: InfoCollapseComponent;
  let fixture: ComponentFixture<InfoCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCollapseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
