import { Injectable } from '@angular/core';

@Injectable({ providedIn:'root'})
export class TimeService {

    date = new Date();

    constructor(){}

    getCurrentDate() {
        let fullDate = (this.date+'').substr(4,11).split(' ');
        return `${fullDate[1]} ${fullDate[0]}, ${fullDate[2]}`;
    }
}