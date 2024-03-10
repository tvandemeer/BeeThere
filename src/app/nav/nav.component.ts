import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FrontendAccordionComponent } from '../frontend-accordion/frontend-accordion.component';
import { BackendAccordionComponent } from '../backend-accordion/backend-accordion.component';
import { ScrumAccordionComponent } from '../scrum-accordion/scrum-accordion.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgbNavModule, FrontendAccordionComponent, BackendAccordionComponent, ScrumAccordionComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  active = 'frontend';
}
