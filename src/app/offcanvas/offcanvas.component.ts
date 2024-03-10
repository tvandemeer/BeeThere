import { Component } from '@angular/core';
import { NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [NgbOffcanvasModule],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.css'
})
export class OffcanvasComponent {

}
