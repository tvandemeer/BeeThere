import { Component } from '@angular/core';

@Component({
  selector: 'app-scrum-modules',
  standalone: true,
  imports: [],
  templateUrl: './scrum-modules.component.html',
  styleUrl: './scrum-modules.component.css'
})
export class ScrumModulesComponent {

  modules: any[] = [
    "Scrum Module 1",
    "Scrum Module 2",
    "Scrum Module 3",
    "Scrum Module 4"
  ];

}
