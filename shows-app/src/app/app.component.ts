import { Show } from './model/show';
import { Component } from '@angular/core';
import { SHOWS } from './consts/shows';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shows = SHOWS;
  selectedShow: Show;

  obj = { name: 'david' };
  setSelectedShow(show: Show) {
    this.selectedShow = show;
  }
  constructor() {

  }
}
