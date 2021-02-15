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
import { CicloVidaComponent } from './helpers/ciclo-vida/ciclo-vida.component';
import { CicloVidaFilhoComponent } from './helpers/ciclo-vida/ciclo-vida-filho/ciclo-vida-filho.component';
import { DecoratorViewchildComponent } from './helpers/decorator-viewchild/decorator-viewchild.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './helpers/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    CicloVidaComponent,
    CicloVidaFilhoComponent,
    DecoratorViewchildComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CursosModule,
    FormsModule, 
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent], 
  exports:[RouterModule]
})
export class AppModule { }
