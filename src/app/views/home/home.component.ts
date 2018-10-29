import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  minValue: number = 20;
  maxValue: number = 80;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 5
  };
  constructor() {

  }

  ngOnInit() {

  }

}
