import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatIconModule, MatButtonModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('conceitos-basicos');

  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
