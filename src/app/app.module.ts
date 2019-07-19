import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { PokemonService } from './services/pokemon.service';
import { PokemonEffects } from './store/effects/pokemon.effects';
import { appReducers } from './store/reducers/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    FiltersComponent,
    CardListComponent,
    PokemonDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([PokemonEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
