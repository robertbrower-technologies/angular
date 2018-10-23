import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'error-icon',
  templateUrl: './error-icon.component.html',
  styleUrls: ['./error-icon.component.css']
})
export class ErrorIconComponent implements OnInit {

    @Input() for: string;

    formControl: FormControl;
    
    constructor(private controlContainer: ControlContainer) { }

    ngOnInit() {
         let formGroup = this.controlContainer.control as FormGroup;
         this.formControl = formGroup.controls[this.for] as FormControl;
    }

    errors() : string {
        let errors = new Array<string>();
        Object.keys(this.formControl.errors).forEach((key: any) => {
            errors.push(this.toString(key, this.formControl.errors[key]));
        });
        return errors.join(', ');
    }

    toString(key: string, error: any) {
        switch (key) {
            case 'email': // { "required": true }
                return `Invalid Email Address`;

            case 'required': // { "required": true }
                return `Required Field`;
            
            case 'minlength': // { "minlength": { "requiredLength": 2, "actualLength": 1 } }
                return `Min Length ${error.requiredLength}: Enter ${error.requiredLength - error.actualLength} more ${error.requiredLength - error.actualLength === 1 ? 'character' : 'characters'}`;

            case 'forbiddenName': // { "forbiddenName": { "value": 'bob' } }
                return `Forbidden Name`;
        }
    }

}
