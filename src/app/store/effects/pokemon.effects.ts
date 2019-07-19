import { Injectable } from '@angular/core';
import {
  LoadPokemon,
  PokemonActionTypes,
  LoadPokemonSuccess
} from '../actions/pokemon.actions';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { PokemonService } from 'src/app/services/pokemon.service';
import { map, flatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IPokemon } from 'src/app/models/pokemon.model';

@Injectable()
export class PokemonEffects {
  @Effect()
  getPokemon$ = this.actions$.pipe(
    ofType<LoadPokemon>(PokemonActionTypes.LoadPokemon),
    map(action => {
      return action.payload;
    }),
    flatMap((id: number) => this.pokemonService.fetchPokemon(id)),
    flatMap((payload: IPokemon) => of(new LoadPokemonSuccess(payload)))
  );
  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}
}
