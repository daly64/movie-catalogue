import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Logo } from '../../components/logo/logo.component';
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [MatButtonModule, Logo],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePage {
  constructor(private router: Router) {}
  login() {
    this.router.navigate(['login']);
  }
  register() {
    this.router.navigate(['register']);
  }
}
