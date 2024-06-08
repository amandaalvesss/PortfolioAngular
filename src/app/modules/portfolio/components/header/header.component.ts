import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuTrigger} from '@angular/material/menu';
import {MatMenu} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatMenu,MatMenuTrigger,MatSidenavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleDropdown() {
    const dropdown = document.getElementsByClassName('dropdown')[0] as HTMLElement;
    const arrow = document.getElementsByClassName('arrow')[0] as HTMLElement;

    dropdown.classList.toggle('down');
    arrow.classList.toggle('gone');

    if (dropdown.classList.contains('down')) {
      setTimeout(() => {
        dropdown.style.overflow = 'visible';
      }, 500);
    } else {
      dropdown.style.overflow = 'hidden';
    }
  }
}
