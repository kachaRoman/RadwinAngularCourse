import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedName = 'Naama';
  customers: string[] = ['David', 'Naama', 'Itzik', 'Moshe'];
  constructor() {

  }

  setSelectedName(name: string) {
    this.selectedName = name;
  }

}
