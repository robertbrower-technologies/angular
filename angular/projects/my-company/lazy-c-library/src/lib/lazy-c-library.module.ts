import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AudioModule } from '@my-company/common';
import { LazyCLibraryRoutingModule } from './modules/lazy-c-library-routing/lazy-c-library-routing.module';
import { LazyCLibraryComponent } from './lazy-c-library.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    AudioModule,
    LazyCLibraryRoutingModule
  ],
  declarations: [LazyCLibraryComponent],
  exports: [LazyCLibraryComponent]
})
export class LazyCLibraryModule { }
