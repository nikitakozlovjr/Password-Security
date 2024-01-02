import checkSecurity from './methodsClass/checkSecurity.js';
import getInfoBoost from './methodsClass/getInfoBoost.js';

class PasswordSecurity {
    constructor(password) {
        this.password = password;
    }

    check() {
        return checkSecurity(this.password);
    }

    boostInfo() {
        return getInfoBoost(this.password);
    }
}

export default PasswordSecurity;