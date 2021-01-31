import { Component, OnInit } from '@angular/core';
import {Dish} from './share/Dish';

const DISHES:Dish[]=[
  
  { id:0,
    name:'pizza',
    image:'../asset/image/pizza',
    category:'large',
    featured:true,
    price:'$12.99',
    description:'3 toopings'
  },
  { id:1,
    name:'donut',
    image:'../asset/image/donut',
    category:'double',
    featured:false,
    price:'$5.99',
    description:'glazed'
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