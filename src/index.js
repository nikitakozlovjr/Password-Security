import checkSecurity from './methodsClass/checkSecurity.js';

class PasswordSecurity {
    constructor(password) {
        this.password = password;
    }

    check() {
        return checkSecurity(this.password);
    }
}

export default PasswordSecurity;