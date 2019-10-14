import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/top-stories', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'comments/:id', loadChildren: () => import('./comments/comments.module').then( m => m.CommentsModule) },
  { path: 'auth/', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'favorites', loadChildren: () => import('./favorites-list/favorites-list.module').then( m => m.FavoritesListModule), canActivate: [AuthGuard] },
  { path: 'top-stories', loadChildren: () => import('./top-stories/top-stories.module').then( m => m.TopStoriesModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
