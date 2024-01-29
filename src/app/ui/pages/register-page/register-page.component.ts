import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CustomButton } from '../../components/custom-button/custom-button.component';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'register-page',
  standalone: true,
  imports: [MatButtonModule,CustomButton, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPage {
  hide = true;
  constructor(private router: Router) {}
  board() {
    this.router.navigate(['board']);
  }
}
