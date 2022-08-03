import { AbstractControl } from '@angular/forms';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';

export class LoginValidators {
    public static ValidateIdNumber(control: AbstractControl) {
        return LoginValidators.validateIdNumber(control.value);
    }

    private static validateIdNumber(israeliID: string): any {
        if (israeliID.length > 9) {
            return { maxLengthExceeded: true };
        }
        if (!(RegExp('^[0-9]+$').test(israeliID))) {
            return { nonDigitsChars: true };
        }
        israeliID = israeliID.padStart(9, '0');

        let sum = 0;

        for (let i = 0; i < israeliID.length; i++) {
            let digit = +(israeliID[israeliID.length - 1 - i]);
            sum += (i % 2 != 0) ? LoginValidators.getDouble(digit) : digit;
        }

        return sum % 10 != 0 
            ? { invalidIdNumber: true }
            : null;
    }

    private static getDouble(i: number): number {
        if (i < 5) {
            return i * 2;
        }
        return LoginValidators.getDouble(i - 5) + 1;
    }
}


