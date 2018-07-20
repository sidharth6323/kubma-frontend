import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout_sell',
  templateUrl: './checkout_sell.component.html',
  styleUrls: ['./checkout_sell.component.scss']
})
export class Checkout_SellComponent implements OnInit {

  activeItem=1;
  item_completed=[];
  active_content=1;
  constructor() {

  }

  ngOnInit() {
  }

}
