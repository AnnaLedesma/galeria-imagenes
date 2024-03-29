import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterImages = '';
  @Output() searchValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  selectData() {
    this.searchValue.emit(this.filterImages)
  }
}
