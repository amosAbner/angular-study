import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemList } from './listItens'

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-shopping',
  styleUrl: './shopping.scss',
  templateUrl: './shopping.html',
})
export class Shopping {

  item: string = "";
  listItem: ItemList[] = []

  addItem() {
    let listItem = new ItemList();
    listItem.id = this.listItem.length + 1;
    listItem.itemName = this.item;

    this.listItem.push(listItem);

    this.item = '';

    console.table(this.listItem);
  }

  itemChecked(listItem: ItemList) {
    listItem.isBought = !listItem.isBought;
  }

  removeItens() {
    this.listItem = []
  }
}
