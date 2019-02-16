import { Dinner } from './../../model/dinner.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-dinner',
  templateUrl: './dinner.component.html'
})
export class DinnerComponent implements OnInit {

  @Input() dinner: Dinner;
    
  constructor() { }

  ngOnInit() {
  }

}
