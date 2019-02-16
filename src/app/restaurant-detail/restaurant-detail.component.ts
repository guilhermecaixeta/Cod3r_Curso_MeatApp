import { Service } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { Dinner } from 'app/model/dinner.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private service: Service, private route: ActivatedRoute ) { }
  dinner: Dinner;

  ngOnInit() {
    this.service.Get<Dinner>('restaurants', this.route.snapshot.params['id']).subscribe(d => this.dinner = d);
  }

}
