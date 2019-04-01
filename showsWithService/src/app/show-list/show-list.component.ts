import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Show } from '../model/show';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {
  @Input()
  shows: Show[] = [];
  @Input()
  selectedShow: Show;
  @Output()
  showSelectionRequested = new EventEmitter<Show>();

  selectShow(show: Show) {
    this.showSelectionRequested.emit(show);
  }

  constructor() { }

  ngOnInit() {
  }
}
