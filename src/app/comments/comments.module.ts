import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsListComponent } from './comments-list.component';
import { ComponentsModule } from '../components/components.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/comments';
import { EffectsModule } from '@ngrx/effects';
import { CommentsEffects } from './effects/comments';


@NgModule({
  declarations: [CommentsListComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    ComponentsModule,
    StoreModule.forFeature('comments', reducer),
    EffectsModule.forFeature([CommentsEffects]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommentsModule { }
