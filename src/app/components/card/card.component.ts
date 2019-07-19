import { Component, OnInit, Input } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { LoadPokemon } from 'src/app/store/actions/pokemon.actions';
import { selectPokemonList } from 'src/app/store/selectors/pokemon.selectors';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemonId: number;

  pokemon$ = this.store.select('pokemon').subscribe(pokemon => {
    if (pokemon.length > 0 && pokemon[this.pokemonId]) {
      console.log('aca');
      return pokemon[this.pokemonId];
    }
  });
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadPokemon(this.pokemonId + 1));
  }
}
