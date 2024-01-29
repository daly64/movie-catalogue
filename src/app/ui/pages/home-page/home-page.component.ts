import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Logo } from '../../components/logo/logo.component';
import { CustomButton } from '../../components/custom-button/custom-button.component';
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [ Logo,CustomButton],
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
