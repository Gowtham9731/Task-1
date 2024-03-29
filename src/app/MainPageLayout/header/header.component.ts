import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isChecked: boolean = false;

  constructor() {}

  toggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

}
