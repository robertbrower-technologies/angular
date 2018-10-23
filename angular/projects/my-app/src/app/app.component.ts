import { Component } from '@angular/core';
import { LoadingService } from '@my-company/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loadingService: LoadingService) {}
  
}
