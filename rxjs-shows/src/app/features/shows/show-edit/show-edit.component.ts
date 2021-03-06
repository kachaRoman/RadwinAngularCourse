import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Show } from '../model/show.model';
import { FormGroup, FormBuilder, Validators, ControlValueAccessor, FormControl, AbstractControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.css']
})
export class ShowEditComponent implements OnInit, OnChanges {
  // ControlValueAccessor
  @Input()
  show: Show;
  @Output()
  saveRequested = new EventEmitter<Show>();
  @Output()
  deleteRequested = new EventEmitter<Show>();


  m = 2;
  showFrom: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  isEven(c: AbstractControl) {
    const value = +c.value;
    if (!isNaN(value) && value % this.m === 0) {
      return null;
    }
    return {
      isEven: { currentValue: c.value }
    };
  }

  deleteShow() {
    this.deleteRequested.emit(this.show);
  }
  save() {
    if (this.showFrom.valid) {
      this.saveRequested.emit(this.showFrom.value);
    }
  }

  getError(fieldName: string) {
    if (this.showFrom.controls[fieldName].errors) {
      return Object.keys(this.showFrom.controls[fieldName].errors);
    }
    return [];
  }
  ngOnChanges() {
    this.showFrom = this.fb.group({
      id: [this.show.id],
      name: [this.show.name, Validators.required],
      language: [this.show.language, Validators.required],
      url: [this.show.url, Validators.required],
      weight: [this.show.weight, Validators.required],
      webChannel: [this.show.webChannel],
      officialSite: [this.show.officialSite, Validators.required],
      runtime: [this.show.runtime, Validators.compose([(c) => this.isEven(c), Validators.required, Validators.min(30)])],
      summary: [this.show.summary, Validators.required],
      image: this.fb.group({
        medium: [this.show.image.medium],
        original: [this.show.image.original]
      })
    });

    // { updateOn: 'blur' }
    // this.showFrom.valueChanges
    //   .pipe(filter(x => this.showFrom.valid))
    //   .subscribe(x => {
    //     this.show = this.showFrom.value;
    //   });

  }



  ngOnInit() {
  }

}
