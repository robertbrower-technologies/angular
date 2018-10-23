import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyBLibraryModule, LazyBLibraryRoutingModule } from '@my-company/lazy-b-library';

@NgModule({
  imports: [
    CommonModule,
    LazyBLibraryModule,
    LazyBLibraryRoutingModule
  ],
  declarations: []
})
export class LazyBModule { }
