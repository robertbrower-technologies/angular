import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyCLibraryComponent } from '../../lazy-c-library.component';

const routes: Routes = [
  { path: '', component: LazyCLibraryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class LazyCLibraryRoutingModule { }
