import { NgModule } from '@angular/core';

import { ClickAudioDirective } from './directives/click-audio.directive';
import { MouseOverAudioDirective } from './directives/mouse-over-audio.directive';
import { OnInitAudioDirective } from './directives/on-init-audio.directive';
import { ScrollAudioDirective } from './directives/scroll-audio.directive';

@NgModule({
  imports: [
    
  ],
  declarations: [
    ClickAudioDirective,
    MouseOverAudioDirective,
    OnInitAudioDirective,
    ScrollAudioDirective
  ],
  exports: [
    ClickAudioDirective,
    MouseOverAudioDirective,
    OnInitAudioDirective,
    ScrollAudioDirective
  ],
  entryComponents: [
    
  ]
})
export class AudioModule { }
