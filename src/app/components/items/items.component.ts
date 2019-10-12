import { Component, OnInit, Input, Output } from '@angular/core';
import { Items } from 'src/app/models/items';
import { Item } from 'src/app/models/item';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {

  @Input() items: Items;
  @Output() toOpen = new EventEmitter<string>();
  
  constructor() { }

  openPage(url) {
    this.toOpen.emit(url);
  }
  ngOnInit() {}

}
