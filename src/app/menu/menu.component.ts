import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
class Dish{
  id:number;
  name:string;
  image:string;
  category:string;
  featured:boolean;
  label:string;
  price:string;
  description:string;
  comments:any[];
}
const DISHES:Dish[]=[
  
  { id:0,
    name:'pizza',
    image:'/assets/images/pizza.png',
    category:'large',
    featured:true,
    label:'',
    price:'$12.99',
    description:'3 toopings',
    comments:[{}]
  },
  { id:0,
    name:'pizza',
    image:'/assets/images/pizza.png',
    category:'large',
    featured:true,
    label:'',
    price:'$12.99',
    description:'3 toopings',
    comments:[{}]
  },
];
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}