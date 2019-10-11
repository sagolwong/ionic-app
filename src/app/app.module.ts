import { NgModule, NgZone, CUSTOM_ELEMENTS_SCHEMA, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { TopStoriesModule } from './top-stories/top-stories.module';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ItemsEffects } from './effects/items';
import { HACKER_NEWS_DB } from './hackernews-db';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.app_db),
    AngularFireDatabaseModule,
    ServicesModule,
    TopStoriesModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'NgRx HNC DevTools',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ItemsEffects]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HACKER_NEWS_DB,
      useFactory: (platformId: Object, zone: NgZone) =>
        new AngularFireDatabase(environment.hackernews_db, 'HackerNews', null, platformId, zone),
      deps: [PLATFORM_ID, NgZone]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
