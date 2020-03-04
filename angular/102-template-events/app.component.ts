import { Component } from '@angular/core';

import { scheduleMap } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'John Doe';
  message = 'Please Clock In';
  currentSchedule = 'Hover to see selected work times';
  list : string[] = [];
  type = "";

  clockIn(event: MouseEvent) {
    var inList = false;
    if (event.shiftKey) {
      this.message = 'Clocked in as manager!';
      this.type = "Manager";
    }
    else {
      this.message = 'Clocked in as employee';
      this.type = "Employee";
    }
    this.list.forEach((person) => {
      if (person === `${this.name} (${this.type})`) {
        inList = true;
      }
    })
    if (inList === false) {
      this.list.push(`${this.name} (${this.type})`);
    }
  }

  clockOut() {
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i] === `${this.name} (Manager)` || this.list[i] === `${this.name} (Employee)`) {
        this.list.splice(i);
      }
    }
    this.message = 'Have a nice day!';
  }

  showSchedule(day: string) {
    this.currentSchedule = scheduleMap[day];
  }

  clearSchedule() {
    this.currentSchedule = 'Hover to see selected work times';
  }

  alerted(day: string) {
    var fullDay;
    switch (day) {
      case 'M':
        fullDay = 'Monday';
        break;
      case 'T':
        fullDay = 'Tuesday';
        break;
      case 'W':
        fullDay = 'Wednesday';
        break;
      case 'R':
        fullDay = 'Thursday';
        break;
      case 'F':
        fullDay = 'Friday';
        break;
    }
    alert(`On this day, ${fullDay}, your schedule is ${scheduleMap[day]}.`)
  }

  changeName() {
    var form = document.getElementById("person");
    this.name = form.options[form.selectedIndex].text;
  }

  updateList() {
    var clocked = document.getElementById("clocked");
    clocked.innerHTML = "<h3>Clocked In</h3>"
    for (var i = 0; i < this.list.length; i++) {
      var li = document.createElement("li");
      var node = document.createTextNode(this.list[i]);
      li.appendChild(node);
      clocked.appendChild(li);
    }
  }
}
