import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockbeeService } from '../services/mockbee.service';
import { Path } from '../models/Path';
import { NgTemplateOutlet, Location } from '@angular/common';
import { ModuleCardComponent } from '../module-card/module-card.component';

@Component({
  selector: 'app-path-detail',
  standalone: true,
  imports: [NgTemplateOutlet, ModuleCardComponent],
  templateUrl: './path-detail.component.html',
  styleUrl: './path-detail.component.css'
})
export class PathDetailComponent implements OnInit {

  path: Path = new Path();

  public modules: any[] = [];

  constructor(
    private mockbeeService: MockbeeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getPath();

    this.getModules();
  }

  getPath(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mockbeeService.GetPath(id)
      .subscribe(path => this.path = path);
  }

  getModules(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mockbeeService.GetPathModules(id)
      .subscribe(modules => this.modules = modules);
  }

  backClicked() {
    this.location.back();
  }

}
