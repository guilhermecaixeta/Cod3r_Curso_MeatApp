import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Service } from 'app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  reviews: Observable<any>;
  constructor(private service: Service, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.service.Get<any>('restaurants', `${ this.route.parent.snapshot.params['id']}/reviews`);
  }

}
