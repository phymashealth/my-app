import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes:Dish[];
  selectedDish:Dish;

  constructor(private service:DishService) { }

  ngOnInit() {
    this.dishes=this.service.getDishes();
    this.selectedDish=this.dishes[0];
  }
  onSelect(dish:Dish){
    this.selectedDish=dish;
  }

}