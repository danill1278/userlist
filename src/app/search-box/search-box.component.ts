import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchFieldText = new FormControl('');

  @Output() filterChanges = new EventEmitter<string>();

  constructor() { }

  onChange() {
    this.searchFieldText.valueChanges.subscribe(val => {
      console.log(val);
      this.filterChanges.emit(val);
    });
  }

  

  ngOnInit() {
    this.onChange();
  }

}
