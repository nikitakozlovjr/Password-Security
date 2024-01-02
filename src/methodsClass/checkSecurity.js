import paramCheck from '../param/paramCheck.js';
import paramReliability from '../param/paramReliability.js';

export default (password) => {
    if(password.length === 0) {
        return 'Enter the password!';
    }

    const resultChecks = Object.values(paramCheck).map((check) => check.test(password));
    const levelCheck = resultChecks.filter((resultCheck) => resultCheck === true).length;
    return `${paramReliability[levelCheck]} level of password security`;
};