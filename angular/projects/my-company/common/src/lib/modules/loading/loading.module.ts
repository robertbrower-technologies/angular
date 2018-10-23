import { NgModule } from '@angular/core';

import { OverlayModule} from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    OverlayModule,
    PortalModule
  ],
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ],
  entryComponents: [
    LoadingComponent
  ]
})
export class LoadingModule { }
