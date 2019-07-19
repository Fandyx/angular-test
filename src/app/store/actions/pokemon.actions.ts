import { Action } from '@ngrx/store';
import { IPokemon } from 'src/app/models/pokemon.model';

export enum PokemonActionTypes {
  LoadPokemon = '[Pokemon] Load Pokemon',
  LoadPokemonSuccess = '[Pokemon] Load Pokemon Success'
}

export class LoadPokemon implements Action {
  readonly type = PokemonActionTypes.LoadPokemon;
  constructor(public payload: number) {}
}

export class LoadPokemonSuccess implements Action {
  readonly type = PokemonActionTypes.LoadPokemonSuccess;
  constructor(public payload: IPokemon) {}
}
export type PokemonActions = LoadPokemon | LoadPokemonSuccess;
