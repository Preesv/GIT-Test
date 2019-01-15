import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../services/promotion.service';
import { Promotion } from '../shared/promotion';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  dish : Dish;
  promo : Promotion;

  constructor(private dishServ: DishService, private promoService: PromotionService) {

  }

  ngOnInit() {
    this.dish = this.dishServ.getFeaturedDish();
    this.promo = this.promoService.getFeaturedPromo();
  }

}
