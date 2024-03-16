import { Component, OnInit } from '@angular/core';
import { MockbeeService } from '../services/mockbee.service';
import { Resource } from '../models/Resource';
import { DecimalPipe, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resources-list',
  standalone: true,
  imports: [DecimalPipe, RouterModule, FontAwesomeModule],
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

  faFilePdf = faFilePdf;

}