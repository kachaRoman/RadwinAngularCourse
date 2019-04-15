import { ShowsService } from './../../services/shows.service';
import { Component, OnInit, OnDestroy, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Show } from '../../model/show.model';
import { Subscription, Subject, Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit, OnDestroy, OnChanges {

  searchTermChanged = new BehaviorSubject<string>('');

  @Input()
  shows: Show[];

  showsAfterFilter$: Observable<Show[]>;

  @Output()
  selectShowRequested = new EventEmitter<Show>();

  constructor() {
    this.showsAfterFilter$ = this.searchTermChanged
      .pipe(debounceTime(200),
        map(x => x.trim()),
        distinctUntilChanged(),
        map(keyword => {
          return this.shows.filter(show => show.name.indexOf(keyword) !== -1);
        }));


  }

  filterShows(val: string) {
    this.searchTermChanged.next(val);
  }

  ngOnChanges() {
    // this.showsAfterFilter = this.shows;
  }

  onSelected(s: Show) {
    this.selectShowRequested.emit(s);
  }
  ngOnDestroy() {
  }

  ngOnInit() {
  }

}
