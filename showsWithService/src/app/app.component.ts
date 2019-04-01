import { Show } from './model/show';
import { Component } from '@angular/core';
import { SHOWS } from './consts/shows';
import { ShowsService } from './services/shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shows: Show[];
  selectedShow: Show;

  obj = { name: 'david' };
  setSelectedShow(show: Show) {
    this.selectedShow = show;
  }

  constructor(private showsService: ShowsService) {
    this.shows = this.showsService.getAllShows();
  }
}
