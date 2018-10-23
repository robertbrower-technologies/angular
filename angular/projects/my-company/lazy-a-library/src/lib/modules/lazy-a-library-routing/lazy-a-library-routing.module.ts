import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyALibraryComponent } from '../../lazy-a-library.component';

const routes: Routes = [
  { path: '', component: LazyALibraryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class LazyALibraryRoutingModule { }
