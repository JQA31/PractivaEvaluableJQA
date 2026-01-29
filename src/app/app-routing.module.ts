import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VecinoListComponent } from './Components/vecino-list/vecino-list.component';
import { JuntaComponent } from './Components/junta/junta.component';

const routes: Routes = [
  {path:"vecinoList",component:VecinoListComponent},
  {path:"junta",component:JuntaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
