import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClassStyleBindingComponent } from './helpers/class-style-binding/class-style-binding.component';
import { DataBindingComponent } from './helpers/data-binding/data-binding.component';
import { DecoratorViewchildComponent } from './helpers/decorator-viewchild/decorator-viewchild.component';
import { EventBindingComponent } from './helpers/event-binding/event-binding.component';
import { HomeComponent } from './helpers/home/home.component';
import { InputPropertyComponent } from './helpers/input-property/input-property.component';
import { OutputPropertyComponent } from './helpers/output-property/output-property.component';
import { TwoWayDataBindingComponent } from './helpers/two-way-data-binding/two-way-data-binding.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'input-property', component: InputPropertyComponent },
  { path: 'output-property', component: OutputPropertyComponent },
  { path: 'viewchild', component: DecoratorViewchildComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'style-binding', component: ClassStyleBindingComponent },
  { path: 'two-way-data-binding', component: TwoWayDataBindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    useHash: true, 
    scrollPositionRestoration: 'enabled',
   })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
