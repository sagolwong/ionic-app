import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './time-ago.pipe';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { CommentComponent } from './comment/comment.component';
import { CommentsComponent } from './comments/comments.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ItemComponent, CommentComponent, CommentsComponent, ItemsComponent,TimeAgoPipe],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ItemsComponent, CommentsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
