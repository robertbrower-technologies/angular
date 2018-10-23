import { Component } from '@angular/core';

import { AudioService, LayoutService } from '@my-company/common';

@Component({
  selector: 'preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent {

    constructor(
      public audioService: AudioService,
      public layoutService: LayoutService) {}

}
