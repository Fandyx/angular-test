import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  constructor() {}
  pokemonIdList: Array<number> = [...Array(25).keys()].map(x => x);
  ngOnInit() {}
}
