import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-collapse',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './info-collapse.component.html',
  styleUrl: './info-collapse.component.css'
})
export class InfoCollapseComponent {
  isCollapsed = true;
}
