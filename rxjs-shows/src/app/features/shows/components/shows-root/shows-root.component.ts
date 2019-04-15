import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../services/shows.service';
import { Show } from '../../model/show.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shows-root',
  templateUrl: './shows-root.component.html',
  styleUrls: ['./shows-root.component.css']
})
export class ShowsRootComponent implements OnInit {
  shows: Observable<Show[]>;
  selectedShow: Show;

  onSelectShowRequested(s: Show) {
    this.selectedShow = s;
  }

  async onDeleteRequested(item: Show) {
    //  this.showsService.delete(item.id).then().catch()
    try {
      await this.showsService.delete(item.id);
      this.selectedShow = null;
    } catch (error) {

    }
  }
  async onSaveRequested(item: Show) {
    await this.showsService.update(item);
    this.selectedShow = null;
  }
  constructor(private showsService: ShowsService) {
    this.shows = this.showsService.shows$;
    this.showsService.loadAllShows();

  }

  ngOnInit() {
  }

}
