import { Component, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() name;
  @Input() goods;
  @Input() odd;

  public carouselTile: NguCarouselConfig = {
    grid: { xs: 3, sm: 3, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true,
    },
    load: 2,
    velocity: 0,
    touch: false,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

}
