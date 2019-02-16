import { Dinner } from './../model/dinner.model';
import { Component, OnInit } from '@angular/core';
import { Service } from 'app/service.service';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  dinners: Dinner[];
  
  constructor(private service: Service) { }

  ngOnInit() {
    this.service.Get<Dinner[]>('restaurants').subscribe(data => this.dinners = data);
  }

}
