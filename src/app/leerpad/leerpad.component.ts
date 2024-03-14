import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../services/placeholder.service';
import { InfoCollapseComponent } from '../info-collapse/info-collapse.component';
import { BeeService } from '../services/bee.service';

@Component({
  selector: 'app-leerpad',
  standalone: true,
  imports: [InfoCollapseComponent],
  templateUrl: './leerpad.component.html',
  styleUrl: './leerpad.component.css'
})
export class LeerpadComponent implements OnInit {

  leerpaden: any[] = [];
  achievements: any[] = [];

  constructor(private placeholderService: PlaceholderService, private beeService: BeeService) {}

  ngOnInit(): void {
    this.placeholderService.GetPosts()
      .subscribe((response) => {
        this.leerpaden = response.slice(0,8);
        for (let i = 0; i < this.leerpaden.length; i++) {
          let picAlign = i % 2 == 0 ? "left" : "right";
          this.leerpaden[i].picAlign = picAlign;
        }
    });

    // this.beeService.GetAchievements()
    //   .subscribe((response) => {
    //     this.achievements = response;
    //   })
  }
}