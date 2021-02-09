import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ClassStyleBindingComponent } from './components/class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { InputPropertyComponent } from './components/input-property/input-property.component';
import { InputPropertyFilhoComponent } from './components/input-property/input-property-filho/input-property-filho.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    InputPropertyComponent,
    InputPropertyFilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CursosModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
