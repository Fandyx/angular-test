import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  types: Array<string> = ['abc', 'def', 'ghi'];
  sortTypes: Array<string> = [
    'By number(asc)',
    'By number(desc)',
    'By name(asc)',
    'By name(desc)'
  ];
  constructor() {}

  ngOnInit() {}
}
