import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssuresComponent } from './components/assures/assures.component';
import { MutualistesComponent } from './components/mutualistes/mutualistes.component';
import { PersonnesAChargeComponent } from './components/personnes-a-charge/personnes-a-charge.component';

const routes: Routes = [
  { path: 'assures', component: AssuresComponent },
  { path: 'mutualistes', component: MutualistesComponent },
  { path: 'personnes-a-charge', component: PersonnesAChargeComponent },
  { path: '', redirectTo: '/assures', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
