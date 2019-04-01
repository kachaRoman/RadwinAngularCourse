import { AppModule } from './../app.module';
import { SHOWS } from './../consts/shows';
import { Show } from '../model/show';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShowsService {

    getAllShows(): Show[] {
        return SHOWS;
    }
    constructor() {
        console.log('ShowsService');
    }
}


export class ShowsServiceMock {
    getAllShows(): Show[] {
        const showsTemp = SHOWS;
        showsTemp.splice(4);
        return showsTemp;
    }
    constructor() {
        console.log('ShowsServiceMock');
    }
}
