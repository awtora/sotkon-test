import { Component, OnInit } from '@angular/core';
import {Bun, Estimates} from './bun';
import {BunService} from '../bun.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-bun',
  templateUrl: './bun.component.html',
  styleUrls: ['./bun.component.css']
})
export class BunComponent implements OnInit {

  Buns: Bun[] = [
    {type: 'Круассан', sellTime: 6, price: 100, freshTime: 3, priceDecrease: 0.02},
    {type: 'Крендель', sellTime: 6, price: 90, freshTime: 3, priceDecrease: 0.5},
    {type: 'Багет', sellTime: 6, price: 80, freshTime: 3, priceDecrease: 0.02},
    {type: 'Сметанник', sellTime: 6, price: 70, freshTime: 3, priceDecrease: 0.04},
    {type: 'Батон', sellTime: 6, price: 60, freshTime: 3, priceDecrease: 0.02}
  ];

  Estimates: Estimates[];

  constructor(private bunService: BunService) {
  }

  ngOnInit(): void {
    this.estimateTime();
  }

  estimateTime(): void {
    this.bunService.estimateTime(this.Buns).subscribe(estim => this.Estimates = estim);
  }

}
