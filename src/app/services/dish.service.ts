import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishService {
//dishes:Dish[];
  constructor() {
    //this.dishes=DISHES;
   }
  getDishes():Dish[]{
    return DISHES;
  }
}

