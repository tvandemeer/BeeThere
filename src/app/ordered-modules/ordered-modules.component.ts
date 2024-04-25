import { Component, OnInit } from '@angular/core';
import { MockbeeService } from '../services/mockbee.service';
import { ModuleCardComponent } from "../module-card/module-card.component";

@Component({
    selector: 'app-ordered-modules',
    standalone: true,
    templateUrl: './ordered-modules.component.html',
    styleUrl: './ordered-modules.component.css',
    imports: [ModuleCardComponent]
})



export class OrderedModulesComponent implements OnInit {

  modules: any[] = [];
  moduleorder: number[] = [3,1,4,2];

  constructor(private mockbeeService: MockbeeService) {}

  ngOnInit(): void {

    this.mockbeeService.GetModules()
       .subscribe(response => this.modules = response);
  }
}
