import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from '../models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(private http: HttpClient) {}
  fetchPokemon(id: number) {
    return this.http.get<IPokemon>('https://pokeapi.co/api/v2/pokemon/' + id);
  }
}
