import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../services/placeholder.service';
import { MockbeeService } from '../services/mockbee.service';
import { RouterModule } from '@angular/router';
import { Path } from '../models/Path';
import { PathCardComponent } from '../path-card/path-card.component';

@Component({
  selector: 'app-leerpad',
  standalone: true,
  imports: [RouterModule, PathCardComponent],
  templateUrl: './leerpad.component.html',
  styleUrl: './leerpad.component.css'
})
export class LeerpadComponent implements OnInit {

  public leerpaden: Path[] = [];

  constructor(private placeholderService: PlaceholderService, private mockbeeService: MockbeeService) {}

  ngOnInit(): void {

    this.mockbeeService.GetData("paths")
      .subscribe(response => this.leerpaden = response); 

  }
}