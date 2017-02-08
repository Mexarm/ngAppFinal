import { FormControl } from '@angular/forms';

export class BasicValidators {
    static notValidEmail(fc: FormControl) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(fc.value))
            return { notValidEmail: true };
        return null;
    }
}