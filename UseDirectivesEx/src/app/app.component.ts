import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr = [1, 2, 3, 4];
  title = 'useDirectives';
  color = 'red';


  showError(key: string) {
    alert(key);
  }
  constructor() {
    setInterval(() => {
      this.color = this.color === 'red' ? 'green' : 'red';
    }, 1000);
  }
  addNewItem() {
    this.arr.push(22);
  }
}
