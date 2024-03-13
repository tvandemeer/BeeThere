import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FrontendAccordionComponent } from '../frontend-accordion/frontend-accordion.component';
import { BackendAccordionComponent } from '../backend-accordion/backend-accordion.component';
import { ScrumAccordionComponent } from '../scrum-accordion/scrum-accordion.component';
import { FrontendModulesComponent } from '../frontend-modules/frontend-modules.component';
import { BackendModulesComponent } from '../backend-modules/backend-modules.component';
import { ScrumModulesComponent } from '../scrum-modules/scrum-modules.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgbNavModule, FrontendAccordionComponent, BackendAccordionComponent, ScrumAccordionComponent,
    FrontendModulesComponent, BackendModulesComponent, ScrumModulesComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  active = 'frontend';
}
