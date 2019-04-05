import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleActive() {
    console.log(this.isActive);
    if (this.isActive) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
    console.log(this.isActive);

  }

  public scroll(elementId): void {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }
}
