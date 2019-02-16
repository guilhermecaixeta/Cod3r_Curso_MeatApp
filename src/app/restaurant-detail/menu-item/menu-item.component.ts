import { MenuItem } from './../../model/menu-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() item: MenuItem;
  @Output() addItem = new EventEmitter<MenuItem>();
  
  constructor() { }

  ngOnInit() {}

  addItemMenu(){
    this.addItem.emit(this.item);
  }
}
