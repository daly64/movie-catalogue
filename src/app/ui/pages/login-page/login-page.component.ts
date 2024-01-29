import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CustomButton } from '../../components/custom-button/custom-button.component';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'login-page',
  standalone: true,
  imports: [MatButtonModule,CustomButton,MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPage{
  hide = true;
  constructor(private router: Router) {}
  board() {
    this.router.navigate(['board']);
  }
}
