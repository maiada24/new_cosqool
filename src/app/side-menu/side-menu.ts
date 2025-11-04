import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: false,
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
})
export class SideMenu {
  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
