import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolamundoComponent } from './holamundo/holamundo.component';
import { HolaComponent } from './hola/hola.component';
import { PersonasComponent } from './personas/personas.component';
import { BackendBaseUrlComponent } from './backend-base-url/backend-base-url.component';

@NgModule({
  declarations: [
    AppComponent,
    HolamundoComponent,
    HolaComponent,
    PersonasComponent,
    BackendBaseUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
