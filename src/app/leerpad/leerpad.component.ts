import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../services/placeholder.service';

@Component({
  selector: 'app-leerpad',
  standalone: true,
  imports: [],
  templateUrl: './leerpad.component.html',
  styleUrl: './leerpad.component.css'
})
export class LeerpadComponent implements OnInit {

  leerpaden: any[] = [];

  constructor(private placeholderService: PlaceholderService) {}

  ngOnInit(): void {
    this.placeholderService.GetPosts()
      .subscribe((response) => {
        this.leerpaden = response.slice(0,8);
    });
  }
}