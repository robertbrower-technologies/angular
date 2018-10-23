import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule} from '@angular/material/tooltip';

import { AudioModule, LayoutModule } from '@my-company/common';
import { LazyBLibraryRoutingModule } from './modules/lazy-b-library-routing/lazy-b-library-routing.module';
import { LazyBLibraryComponent } from './lazy-b-library.component';
import { ErrorIconComponent } from './components/error-icon/error-icon.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { YesNoDialogComponent } from './components/yes-no-dialog/yes-no-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    LayoutModule,
    AudioModule,
    LazyBLibraryRoutingModule
  ],
  declarations: [
    LazyBLibraryComponent,
    ErrorIconComponent,
    SnackbarComponent,
    YesNoDialogComponent
  ],
  exports: [
    LazyBLibraryComponent,
    ErrorIconComponent,
    SnackbarComponent,
    YesNoDialogComponent
  ],
  entryComponents: [
    SnackbarComponent,
    YesNoDialogComponent
  ]
})
export class LazyBLibraryModule { }
