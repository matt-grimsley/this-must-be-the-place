import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { PlacesFormComponent } from './places-form/places-form.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesMapComponent } from './places-map/places-map.component';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PlacesFormComponent,
    PlacesListComponent,
    PlacesMapComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDoitHq2P_uUf3bSpGTwSBqAcKMEBqVCzM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
