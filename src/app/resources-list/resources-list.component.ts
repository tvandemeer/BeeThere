import { Component, OnInit } from '@angular/core';
import { MockbeeService } from '../services/mockbee.service';
import { Resource } from '../models/Resource';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-resources-list',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './resources-list.component.html',
  styleUrl: './resources-list.component.css'
})
export class ResourcesListComponent implements OnInit {

  resources: Resource[] = [];

  constructor(private mockbeeService: MockbeeService) {}

  ngOnInit(): void {
    this.mockbeeService.GetResources()
      .subscribe(response => this.resources = response);
  }

}
