import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

const DELAY = 0;

@Injectable({
    providedIn: 'root'
})
export class DelayResolveService implements Resolve<Observable<any>> {
  constructor() {}

  resolve() {
    return of(null).pipe(delay(DELAY));
  }
}