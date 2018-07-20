import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  purchase_history;
  constructor() {
    this.purchase_history=[
      {
        date:"09/09/14",
        qty:73,
        slice:1124
      },
      {
        date:"09/09/14",
        qty:62,
        slice:1138
      },
      {
        date:"09/07/14",
        qty:32,
        slice:983
      },
      {
        date:"02/06/14",
        qty:73,
        slice:1124
      },
      {
        date:"03/05/14",
        qty:73,
        slice:1124
      }
    ]
  }

  ngOnInit() {
  }

}
