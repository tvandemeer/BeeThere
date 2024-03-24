import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordered-modules',
  standalone: true,
  imports: [],
  templateUrl: './ordered-modules.component.html',
  styleUrl: './ordered-modules.component.css'
})



export class OrderedModulesComponent implements OnInit {

  modules: any[] = [
    {
      "id": 1,
      "name": "C#",
      "description": "C# Module",
      "image": "https://example.com",
      "changeDate": null,
      "changedBy": null,
      "learningPaths": []
    },
    {
      "id": 2,
      "name": "Angular",
      "description": "The Front-End framework",
      "image": null,
      "changeDate": "2024-03-23T15:57:02.7074105",
      "changedBy": null,
      "learningPaths": []
    },
    {
      "id": 3,
      "name": "Docker",
      "description": "Accelerated Container Application Development",
      "image": null,
      "changeDate": "2024-03-24T12:14:09.9354682",
      "changedBy": null,
      "learningPaths": []
    },
    {
      "id": 4,
      "name": "Entity Framework",
      "description": "An object-relational mapper",
      "image": "/module.img",
      "changeDate": "2024-03-24T16:06:28.1743096",
      "changedBy": null,
      "learningPaths": []
    }
  ];

  moduleorder: number[] = [2,1,3,4];
  orderedmodules: any[] = [];

  ngOnInit(): void {
    for (let i: number = 0; i < this.moduleorder.length; i++) {
      this.modules.forEach((mod) => {
        if (mod.id === this.moduleorder[i]) {
          this.orderedmodules.push(mod);
        }
      })
    }
  }

}
