import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, distinct, distinctUntilChanged, filter, debounceTime } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-calc-result',
  templateUrl: './calc-result.component.html',
  styleUrls: ['./calc-result.component.scss']
})
export class CalcResultComponent implements OnInit, OnDestroy {

  sum$: Observable<number>;
  message = 'Result:';
  op = '*';


  constructor(private activatedRoute: ActivatedRoute) {
    console.log('Calc Ctor');
    this.sum$ = combineLatest(activatedRoute.fragment, activatedRoute.params)
      .pipe(map(([hash, params]) => {
        hash = hash || '*';
        console.log('Works');
        return eval(+params.xParam + hash + +params.yParam);
      }));





    // activatedRoute.fragment
    //   .pipe(f => f)
    //   .subscribe(f => {
    //     this.op = f;
    //   });

    // activatedRoute.queryParams
    //   .pipe(filter(qs => qs.message))
    //   .subscribe(qs => {
    //     this.message = qs.message;
    //   });

    // activatedRoute.params
    //   .pipe(
    //     // tslint:disable-next-line:no-eval
    //     map(p => eval(+p.xParam + this.op + +p.yParam)),
    //     distinctUntilChanged())
    //   .subscribe(result => {
    //     this.sum = result;
    //   });
  }

  ngOnDestroy() {
    console.log('Calc destroy');
  }

  ngOnInit() {

  }
}
