import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdityaComponent } from './aditya/aditya.component';
import { KrishnaComponent } from './krishna/krishna.component';

const routes: Routes = [
  {path : 'krishna' , component : KrishnaComponent},
  {path : 'aditya' , component : AdityaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
