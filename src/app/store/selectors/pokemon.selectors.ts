import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IPokemonState } from '../state/pokemon.state';

const selectPokemon = (state: IAppState) => state.pokemon;
export const selectPokemonList = createSelector(
  selectPokemon,
  (state: IPokemonState) => state.pokemonList
);

export const selectSelectedPokemon = createSelector(
  selectPokemon,
  (state: IPokemonState) => state.selectedPokemon
);
