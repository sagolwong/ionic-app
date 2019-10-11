import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopStoriesComponent } from './top-stories.component';
import { IonicModule } from '@ionic/angular';
import { ItemComponent } from '../components/item/item.component';
import { ItemsComponent } from '../components/items/items.component';
import { TimeAgoPipe } from '../components/time-ago.pipe';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { TopStoriesRoutingModule } from './top-stories-routing-modules';
import { reducers as topStoriesReducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { TopStoriesEffects } from './effects/top-stories';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    TopStoriesRoutingModule,
    StoreModule.forFeature('topStories', topStoriesReducers),
    EffectsModule.forFeature([TopStoriesEffects]),
  ],
  declarations: [TopStoriesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class TopStoriesModule { }
