import { Routes } from '@angular/router';
import { MenuComponent } from './features/menu/menu.component';
import { BookComponent } from './features/book/book.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'books', component: BookComponent }, // Books route
    { path: '**', redirectTo: '' }, // Fallback route for unknown paths
  ];
