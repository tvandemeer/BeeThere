import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resource-detail',
  standalone: true,
  imports: [],
  templateUrl: './resource-detail.component.html',
  styleUrl: './resource-detail.component.css'
})
export class ResourceDetailComponent {

  constructor(private location: Location) {}

  backClicked() {
    this.location.back();
  }

}
