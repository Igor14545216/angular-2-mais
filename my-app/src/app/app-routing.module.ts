import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DataBindingComponent } from './helpers/data-binding/data-binding.component';
import { HomeComponent } from './helpers/home/home.component';
import { InputPropertyComponent } from './helpers/input-property/input-property.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'input-property', component: InputPropertyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
