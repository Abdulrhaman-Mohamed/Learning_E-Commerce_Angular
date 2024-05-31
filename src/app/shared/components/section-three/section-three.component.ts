import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.css'
})
export class SectionThreeComponent {
  @Input() bgColor: string ="bg-blue-400";
  @Input() imageUrl: string = "https://optimal-demos.myshopify.com/cdn/shop/files/dm3-sm-1_560x.jpg?v=1635239538";
}
