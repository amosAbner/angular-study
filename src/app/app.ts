import { Component, signal } from '@angular/core';
import { Calculator } from './calculator/calculator';
import { Shopping } from "./shopping/shopping";

@Component({
  imports: [Shopping],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('conceitos-basicos');
}
