import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  transparent = true;

  @HostListener("window:scroll")
  onWindowScroll() {
    if (window.scrollY > 0) this.transparent = false;
    else this.transparent = true;
  }
}
