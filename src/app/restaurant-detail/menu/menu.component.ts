import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Service } from 'app/service.service';
import { MenuItem } from 'app/model/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItem: Observable<MenuItem[]>;

  constructor(private service: Service, private router: ActivatedRoute ) { }

  ngOnInit() {
    this.menuItem = this.service.Get<MenuItem[]>('restaurants', `${this.router.parent.snapshot.params['id']}/menu`);
  }

}
