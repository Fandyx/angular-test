import { PokemonActions, PokemonActionTypes } from '../actions/pokemon.actions';
import { IPokemonState, initialPokemonState } from '../state/pokemon.state';

export function pokemonReducers(
  state = initialPokemonState,
  action: PokemonActions
): IPokemonState {
  switch (action.type) {
    case PokemonActionTypes.LoadPokemon: {
      return {
        ...state,
        isLoading: true
      };
    }

    case PokemonActionTypes.LoadPokemonSuccess: {
      const pokemonList = [...state.pokemonList];
      pokemonList[action.payload.id - 1] = action.payload;
      console.log(pokemonList);
      console.log('aca', action.payload);
      return {
        ...state,
        isLoading: false,
        pokemonList,
        selectedPokemon: action.payload
      };
    }

    default:
      return state;
  }
}
