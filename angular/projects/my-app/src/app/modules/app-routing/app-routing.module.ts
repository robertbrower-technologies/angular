import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelayResolveService } from '../../services/delay-resolve.service';
import { HomeComponent } from '../../components/home/home.component';
import { PreferencesComponent } from '../../components/preferences/preferences.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, resolve: { resolved: DelayResolveService } },
  { path: 'lazy-a', loadChildren: '../lazy-a/lazy-a.module#LazyAModule', resolve: { delay: DelayResolveService } },
  { path: 'lazy-b', loadChildren: '../lazy-b/lazy-b.module#LazyBModule', resolve: { delay: DelayResolveService } },
  // { path: 'lazy-c', loadChildren: '../lazy-c/lazy-c.module#LazyCModule', resolve: { delay: DelayResolveService } },
  { path: 'preferences', component: PreferencesComponent, resolve: { resolved: DelayResolveService } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
