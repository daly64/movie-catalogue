import { Routes } from '@angular/router';
import { HomePage } from './ui/pages/home-page/home-page.component';
import { LoginPage } from './ui/pages/login-page/login-page.component';
import { RegisterPage } from './ui/pages/register-page/register-page.component';
import { BoardPage } from './ui/pages/board-page/board-page.component';

export const routes: Routes = [
    { path: 'home', component: HomePage},
    { path: 'register', component: RegisterPage},
    { path: 'login', component: LoginPage},
    { path: 'board', component: BoardPage},
    { path: '', component: HomePage },
    { path: '**', component: HomePage },
];
