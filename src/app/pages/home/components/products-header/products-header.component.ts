import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>()
  sort = 'desc'
  itemsShowCount = 12

  constructor() {
  }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string) {
    this.sort = newSort
  }

  onItemsUpdated(count: number) {
    this.itemsShowCount = count
  }

  onColumnUpdated(colsNum: number) {
    this.columnsCountChange.emit(colsNum)
  }

}
