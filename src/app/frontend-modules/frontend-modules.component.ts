import { Component } from '@angular/core';

@Component({
  selector: 'app-frontend-modules',
  standalone: true,
  imports: [],
  templateUrl: './frontend-modules.component.html',
  styleUrl: './frontend-modules.component.css'
})
export class FrontendModulesComponent {

  modules: any[] = [
    "Frontend Module 1",
    "Frontend Module 2",
    "Frontend Module 3",
    "Frontend Module 4",
    "Frontend Module 5",
    "Frontend Module 6"
  ];

}
