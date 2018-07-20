import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout_buy',
  templateUrl: './checkout_buy.component.html',
  styleUrls: ['./checkout_buy.component.scss']
})
export class Checkout_BuyComponent implements OnInit {

  activeItem=1;
  item_completed=[];
  active_content=1;
  constructor() {

  }

  ngOnInit() {
  }

}
