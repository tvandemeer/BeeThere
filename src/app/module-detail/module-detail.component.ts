import { Component, Input, OnInit } from '@angular/core';
import { MockbeeService } from '../services/mockbee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-module-detail',
  standalone: true,
  imports: [],
  templateUrl: './module-detail.component.html',
  styleUrl: './module-detail.component.css'
})
export class ModuleDetailComponent implements OnInit {
  
  module: any = {};
  //@Input() module: any;
  
  modDetail: any = {};

  constructor(
    private mockbeeService: MockbeeService,
    private route: ActivatedRoute,
    private location: Location) {}
  
  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);

    this.mockbeeService.GetModule(id)
      .subscribe(res => this.module = res);
  }

  backClicked() {
    this.location.back();
  }

}
