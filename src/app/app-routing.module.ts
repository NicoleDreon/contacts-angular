import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockedComponent } from './blocked/blocked.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: ContactsPageComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'blocked', component: BlockedComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
