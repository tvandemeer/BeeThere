import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockbeeService } from '../services/mockbee.service';
import { Path } from '../models/Path';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-path-detail',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './path-detail.component.html',
  styleUrl: './path-detail.component.css'
})
export class PathDetailComponent implements OnInit {

  path: Path = new Path();

  constructor(
    private mockbeeService: MockbeeService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.getPath();
  }

  getPath(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mockbeeService.GetPath(id)
      .subscribe(path => this.path = path);
  }

}
