import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyCLibraryModule, LazyCLibraryRoutingModule } from '@my-company/lazy-c-library';

@NgModule({
  imports: [
    CommonModule,
    LazyCLibraryModule,
    LazyCLibraryRoutingModule
  ],
  declarations: []
})
export class LazyCModule { }
