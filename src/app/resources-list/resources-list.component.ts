import { Component, OnInit } from '@angular/core';
import { MockbeeService } from '../services/mockbee.service';
import { Resource } from '../models/Resource';
import { DecimalPipe, Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resources-list',
  standalone: true,
  imports: [DecimalPipe, RouterModule],
  templateUrl: './resources-list.component.html',
  styleUrl: './resources-list.component.css'
})
export class ResourcesListComponent implements OnInit {

  resources: Resource[] = [];

  constructor(private mockbeeService: MockbeeService, private location: Location) {}

  ngOnInit(): void {
    this.mockbeeService.GetResources()
      .subscribe(response => this.resources = response);
  }

  backClicked() {
    this.location.back();
  }

}