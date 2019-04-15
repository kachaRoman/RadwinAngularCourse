import { ShowsService } from './features/shows/services/shows.service';
import { Component } from '@angular/core';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isShowCountVisible = false;
  count$: Observable<number>;
  changeVisible() {
    this.isShowCountVisible = true;
  }
  
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
