import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {
  @Input()
  gameType:string="DIGITAL PS4";
  @Input()
  gamePrice:string="349,99";
  constructor() { }

  ngOnInit(): void {
  }

}
