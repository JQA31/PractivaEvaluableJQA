import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VecinoListComponent } from './Components/vecino-list/vecino-list.component';
import { JuntaComponent } from './Components/junta/junta.component';
import { FormsModule } from '@angular/forms';
import { DGritarDirective } from './Directives/d-gritar.directive';
import { PMayusculasPipe } from './Pipes/p-mayusculas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VecinoListComponent,
    JuntaComponent,
    DGritarDirective,
    PMayusculasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
