import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../services/placeholder.service';
import { InfoCollapseComponent } from '../info-collapse/info-collapse.component';

@Component({
  selector: 'app-leerpad',
  standalone: true,
  imports: [InfoCollapseComponent],
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
        for (let i = 0; i < this.leerpaden.length; i++) {
          let picAlign = i % 2 == 0 ? "left" : "right";
          this.leerpaden[i].picAlign = picAlign;
        }
    });
  }
}