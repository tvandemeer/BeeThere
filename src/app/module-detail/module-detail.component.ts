import { Component, Input, OnInit } from '@angular/core';
import { MockbeeService } from '../services/mockbee.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { Resource } from '../models/Resource';

@Component({
  selector: 'app-module-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './module-detail.component.html',
  styleUrl: './module-detail.component.css'
})
export class ModuleDetailComponent implements OnInit {
  
  module: any = {};
  resources: any = [];
  modResources: Resource[] = [];

  constructor(
    private mockbeeService: MockbeeService,
    private route: ActivatedRoute,
    private location: Location) {}
  
  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.mockbeeService.GetModule(id)
      .subscribe(res => this.module = res);

    this.mockbeeService.GetResources()
      .subscribe(res => this.resources = res);
  }

  backClicked() {
    this.location.back();
  }

}
