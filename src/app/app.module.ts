import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AssuresComponent } from './components/assures/assures.component';
import { MutualistesComponent } from './components/mutualistes/mutualistes.component';
import { PersonnesAChargeComponent } from './components/personnes-a-charge/personnes-a-charge.component';
import { MutualistesCreateComponent } from './components/mutualistes-create/mutualistes-create.component';
import { MutualistesShowComponent } from './components/mutualistes-show/mutualistes-show.component';
import { MutualistesEditComponent } from './components/mutualistes-edit/mutualistes-edit.component';
import { PersonnesAChargeCreateComponent } from './components/personnes-a-charge-create/personnes-a-charge-create.component';
import { PersonnesAChargeEditComponent } from './components/personnes-a-charge-edit/personnes-a-charge-edit.component';
import { PersonnesAChargeShowComponent } from './components/personnes-a-charge-show/personnes-a-charge-show.component';

@NgModule({
  declarations: [
    AppComponent,
    AssuresComponent,
    MutualistesComponent,
    PersonnesAChargeComponent,
    MutualistesCreateComponent,
    MutualistesShowComponent,
    MutualistesEditComponent,
    PersonnesAChargeCreateComponent,
    PersonnesAChargeEditComponent,
    PersonnesAChargeShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
