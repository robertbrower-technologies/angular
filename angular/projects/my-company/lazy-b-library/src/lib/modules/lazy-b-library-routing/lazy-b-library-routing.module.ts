import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@my-company/common';

import { LazyBLibraryComponent } from '../../lazy-b-library.component';

const routes: Routes = [
  { path: '', component: LazyBLibraryComponent, canDeactivate: [CanDeactivateGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class LazyBLibraryRoutingModule { }
