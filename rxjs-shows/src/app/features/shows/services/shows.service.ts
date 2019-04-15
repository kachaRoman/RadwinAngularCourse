import { Injectable } from '@angular/core';
import { Show } from '../model/show.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  private showsSubject = new BehaviorSubject<Show[]>([]);

  get shows$(): Observable<Show[]> {
    return this.showsSubject;
  }

  delete(showId: number): Promise<any> {
    const url = `${environment.apiUrl}shows/${showId}`;
    return this.http.delete<any>(url)
      .pipe(tap(o => {
        this.loadAllShows();
      })).toPromise();

    // const url = `${environment.apiUrl}shows/${showId} `;
    // return new Promise<any>((reslove, reject) => {
    //   this.http.delete<any>(url).subscribe(result => {
    //     this.loadAllShows();
    //     reslove(result);
    //   }, error => {
    //     reject(error);
    //   });

    // });
  }


  update(item: Show): Promise<Show> {
    const url = `${environment.apiUrl}shows/${item.id}`;
    return this.http.put<Show>(url, item).pipe(tap(o => {
      this.loadAllShows();
    })).toPromise();

  }

  loadAllShows() {
    const url = `${environment.apiUrl}shows`;
    this.http.get<Show[]>(url).subscribe(result => {
      this.showsSubject.next(result);
    });

  }


  constructor(private http: HttpClient) { }
}
