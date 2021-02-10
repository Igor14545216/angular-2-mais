import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './helpers/data-binding/data-binding.component';
import { ClassStyleBindingComponent } from './helpers/class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './helpers/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './helpers/two-way-data-binding/two-way-data-binding.component';
import { InputPropertyComponent } from './helpers/input-property/input-property.component';
import { InputPropertyFilhoComponent } from './helpers/input-property/input-property-filho/input-property-filho.component';
import { OutputPropertyComponent } from './helpers/output-property/output-property.component';
import { OutputPropertyFilhoComponent } from './helpers/output-property/output-property-filho/output-property-filho.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    InputPropertyComponent,
    InputPropertyFilhoComponent,
    OutputPropertyComponent,
    OutputPropertyFilhoComponent,
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
