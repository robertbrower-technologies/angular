import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyALibraryModule, LazyALibraryRoutingModule } from '@my-company/lazy-a-library';

@NgModule({
  imports: [
    CommonModule,
    LazyALibraryModule,
    LazyALibraryRoutingModule
  ],
  declarations: []
})
export class LazyAModule { }
