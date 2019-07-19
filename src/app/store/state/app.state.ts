import { RouterReducerState } from '@ngrx/router-store';

import { IPokemonState, initialPokemonState } from './pokemon.state';

export interface IAppState {
  router?: RouterReducerState;
  pokemon: IPokemonState;
}

export const inititalAppState: IAppState = {
  pokemon: initialPokemonState
};

export function getInitialState(): IAppState {
  return inititalAppState;
}
