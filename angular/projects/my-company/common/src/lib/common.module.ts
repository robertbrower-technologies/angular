import { NgModule } from '@angular/core';

import { AudioModule } from './modules/audio/audio.module';
import { CanDeactivateModule } from './modules/can-deactivate/can-deactivate.module';
import { LayoutModule } from './modules/layout/layout.module';
import { LoadingModule } from './modules/loading/loading.module';
import { LogoModule } from './modules/logo/logo.module';
import { QueryModule } from './modules/query/query.module';

@NgModule({
  imports: [
    AudioModule,
    CanDeactivateModule,
    LayoutModule,
    LoadingModule,
    LogoModule,
    QueryModule
  ],
  declarations: [

  ],
  exports: [

  ],
  entryComponents: [
    
  ]
})
export class CommonModule { }
