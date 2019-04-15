import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowsService } from 'src/app/features/shows/services/shows.service';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-shows-count',
  templateUrl: './shows-count.component.html',
  styleUrls: ['./shows-count.component.css']
})
export class ShowsCountComponent {
  count$: Observable<number>;

  constructor(showsService: ShowsService) {
    // showsService.shows$.subscribe(result => {
    //   this.count = result.length;
    // });

    // showsService.shows$.pipe(map(x => x.length)).subscribe(length => {
    //   this.count = length;
    // });

    // showsService.shows$.pipe(map(x => x.length), distinctUntilChanged()).subscribe(length => {
    //   this.count = length;
    // });

    this.count$ = showsService.shows$.pipe(map(x => x.length), distinctUntilChanged());

  }

}
