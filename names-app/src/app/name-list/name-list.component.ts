import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.scss']
})
export class NameListComponent implements OnInit {

  @Input()
  names: string[] = [];
  @Input()
  selectedName: string;

  @Output()
  nameSelected = new EventEmitter<string>();

  setSelectedItem(name: string) {
    this.nameSelected.emit(name);
  }

  deleteName(event: MouseEvent, index: number) {
    event.stopPropagation();
    // event.preventDefault();
    this.names.splice(index, 1);
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
