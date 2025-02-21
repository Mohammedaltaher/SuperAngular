import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './features/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , MenuComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'SuperAngular';
}
