import { Component } from '@angular/core';

@Component({
  selector: 'app-backend-modules',
  standalone: true,
  imports: [],
  templateUrl: './backend-modules.component.html',
  styleUrl: './backend-modules.component.css'
})
export class BackendModulesComponent {

  modules: any[] = [
    "Backend Module 1",
    "Backend Module 2",
    "Backend Module 3",
    "Backend Module 4",
    "Backend Module 5",
    "Backend Module 6",
    "Backend Module 7",
    "Backend Module 8"
  ];

}
