import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-path-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './path-card.component.html',
  styleUrl: './path-card.component.css'
})
export class PathCardComponent {

  @Input() path: any;

}
