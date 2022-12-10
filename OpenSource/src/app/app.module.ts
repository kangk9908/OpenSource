import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase services + environment module
// source "Set Up Firebase Packages" : https://www.positronx.io/full-angular-firebase-authentication-system/
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // Firebase services + environment module
    // source "Set Up Firebase Packages" : https://www.positronx.io/full-angular-firebase-authentication-system/
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,

    NgbModule,
  ],

  // passing AuthService class into providers array
  // by doing this the authentication service will be available throughout application
  // source "Create Auth Service" : https://www.positronx.io/full-angular-firebase-authentication-system/
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
