import { Component } from '@angular/core';

@Component({
  selector: 'name-sect',
  template: `
  <div class="container text-center">
    <h3>Please enter your name below:</h3>
    <br>
    <label for="first">First name:  </label>
    <input type="text" id="first" name="first">
    <br><br>
    <label for="last">Last name:  </label>
    <input type="text" id="last" name="last">
    <br><br>
    <button (click)="submit()">Submit</button>
    <br><br>
    <h4 id="error"></h4>
    <br><br>
    <h1 id="name"></h1>
  </div>
  `
})
export class NameComponent {
  name = "";
  first = "";
  last = "";
  submit() {
    var first = (<HTMLInputElement>document.getElementById("first")).value;
    var last = (<HTMLInputElement>document.getElementById("last")).value;
    this.first = first;
    this.last = last;
    if (first === "" || last === "") {
      document.getElementById('error').innerText = "Error: Not all information has been filled. Please fill in all information."
    }
    else {
      document.getElementById('error').innerText = "";
      document.getElementById('name').innerText = "Your name is " + this.first + " " + this.last;
    }
  };

 }
