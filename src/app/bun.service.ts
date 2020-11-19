import { Injectable } from '@angular/core';
import {Bun, Estimates} from './bun/bun';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BunService {

  constructor() { }

  estimateTime(bun: Bun[]): Observable<Estimates[]> {
    let result: Estimates[];
    for (let i: 0; i < bun.length; i++) {
      if (bun[i].type === 'Крендель') {
        result.push({price: bun[i].price * 0.5 , time: bun[i].freshTime});
        console.log('Крендель');
      }
      if (bun[i].type === 'Сметанник') {
        result.push({price: bun[i].price * 0.96 , time: 1});
        console.log('Сметанник');
      }
      if (bun[i].type !== 'Крендель' || bun[i].type !== 'Сметанник') {
        result.push({price: bun[i].price * 0.98 , time: 1});
        console.log('ни то ни другое');
      }
    }
    console.log(result);
    return of(result);
  }
}
