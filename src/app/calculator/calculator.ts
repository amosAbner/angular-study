import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calculator',
  styleUrl: './calculator.scss',
  templateUrl: './calculator.html',
})
export class Calculator {

  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  calcResult() {
    this.result = this.num1 + this.num2;
  }
}
