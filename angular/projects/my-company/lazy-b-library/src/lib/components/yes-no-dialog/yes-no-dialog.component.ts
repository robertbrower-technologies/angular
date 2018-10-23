import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface YesNoDialogData {
    title: string;
    message: string;
}

@Component({
    selector: 'yes-no-dialog',
    templateUrl: './yes-no-dialog.component.html',
    styleUrls: ['./yes-no-dialog.component.css']
  })
  export class YesNoDialogComponent {

    constructor(
      public dialogRef: MatDialogRef<YesNoDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: YesNoDialogData) {}
  
  }