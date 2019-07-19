import { IPokemon } from '../../models/pokemon.model';

export interface IPokemonState {
  pokemonList: IPokemon[];
  selectedPokemon: IPokemon;
  isLoading: boolean;
}

export const initialPokemonState: IPokemonState = {
  pokemonList: [],
  selectedPokemon: null,
  isLoading: false
};
