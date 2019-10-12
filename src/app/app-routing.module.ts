import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/top-stories', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'comments/:id', loadChildren: () => import('./comments/comments.module').then( m => m.CommentsModule) },
  { path: 'top-stories', loadChildren: () => import('./top-stories/top-stories.module').then( m => m.TopStoriesModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
