import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FristComponentComponent } from './componente/frist-component/frist-component.component';
import { FerramentasComponent } from './components/ferramentas/ferramentas.component';
import { TituloComponent } from './componente/titulo/titulo.component';
import { DadosFerramentaComponent } from './components/dados-ferramenta/dados-ferramenta.component';

@NgModule({
  declarations: [
    AppComponent,
    FristComponentComponent,
    FerramentasComponent,
    TituloComponent,
    DadosFerramentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
