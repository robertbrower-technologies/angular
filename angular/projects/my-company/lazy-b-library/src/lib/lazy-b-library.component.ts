import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { debounceTime, map } from 'rxjs/operators';
import { Observable, of, Subscription } from 'rxjs';
import { CanComponentDeactivate, LayoutService } from '@my-company/common';
// import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { YesNoDialogComponent } from './components/yes-no-dialog/yes-no-dialog.component';

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

@Component({
  selector: 'lib-lazy-b-library',
  templateUrl: './lazy-b-library.component.html',
  styleUrls: ['./lazy-b-library.component.css']
})
export class LazyBLibraryComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  formGroup: FormGroup;

  formGroupValueChanges: Subscription;
  
  constructor(
    // private snackBar: MatSnackBar,
    public dialog: MatDialog,
    public layoutService: LayoutService) { }

  ngOnInit() {
    this.formGroup = this.createFormGroup();
    // this.formGroupValueChanges = this.formGroup.valueChanges.pipe(debounceTime(500)).subscribe(() => {
    //   this.snackBar.openFromComponent(
    //     SnackbarComponent,
    //     {
    //       data: this.formGroup.valid,
    //       duration: 1000,
    //       horizontalPosition: 'end',
    //       panelClass: this.formGroup.valid ?
    //         ['border-radius-10px', 'background-color-mat-primary', 'color-mat-secondary', 'mat-elevation-z8'] :
    //         ['border-radius-10px', 'background-color-mat-primary', 'color-mat-warn', 'mat-elevation-z8']
    //     }
    //   );
    // });
  }
  
  ngOnDestroy() {
    // this.formGroupValueChanges.unsubscribe();
  }

  createFormGroup(): FormGroup {
    let group: any = {
      id: new FormControl(undefined, []),
      first_name: new FormControl('', [Validators.required, Validators.minLength(2), forbiddenNameValidator(new RegExp('ass'))]),
      last_name: new FormControl('', [Validators.required, Validators.minLength(2), forbiddenNameValidator(new RegExp('ass'))]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', [Validators.required]),
      ip_address: new FormControl('', [Validators.required]),
    };

    return new FormGroup(group);
  }

  canDeactivate(): Observable<boolean> {
    if (this.formGroup.dirty) {
      const dialogRef = this.dialog.open(YesNoDialogComponent, {
        data: {title: 'Unsaved Changes', message: 'Navigate away?', affirmed: false}
      });
  
      return dialogRef.afterClosed().pipe(map(result => result));
    } else {
      return of(true);
    }
    
  }

}
