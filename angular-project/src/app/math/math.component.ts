import { Component } from '@angular/core';

@Component({
  selector: 'math-sect',
  template: `
  <div class="container text-center">
    <h3>Please enter numbers to see the calculations:</h3>
    <br>
    <label for="numOne">Number One:  </label>
    <input type="text" id="numOne" name="numOne">
    <br><br>
    <label for="numTwo">Number Two:  </label>
    <input type="text" id="numTwo" name="numTwo">
    <br><br>
    <button (click)="calculate()">Calculate</button>
    <h5 id="add"></h5>
    <h5 id="subtract"></h5>
    <h5 id="multiply"></h5>
    <h5 id="divide"></h5>
  </div>
  `
})
export class MathComponent {
  calculate() {
    var one = +((<HTMLInputElement>document.getElementById("numOne")).value);
    var two = +((<HTMLInputElement>document.getElementById("numTwo")).value);
    document.getElementById('add').innerText = one + " + " + two + " = " + (one + two);
    document.getElementById('subtract').innerText = one + " - " + two + " = " + (one - two);
    document.getElementById('multiply').innerText = one + " * " + two + " = " + (one * two);
    document.getElementById('divide').innerText = one + " / " + two + " = " + (one / two);
  }
}
