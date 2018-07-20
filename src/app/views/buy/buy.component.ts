import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  slices_available;
  constructor() {
    this.slices_available=[
      {
        qty:72,
        price:1182,
        diff:13.9
      },
      {
        qty:34,
        price:1188,
        diff:14.5
      },
      {
        qty:126,
        price:1193,
        diff:15.0
      },
      {
        qty:7,
        price:1194,
        diff:15.1
      },
      {
        qty:32,
        price:1197,
        diff:15.4
      }
    ]
  }

  ngOnInit() {
  }

}
