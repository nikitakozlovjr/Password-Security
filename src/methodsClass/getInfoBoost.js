import paramCheck from '../param/paramCheck.js';
import paramBoost from '../param/paramBoost.js';

export default (password) => {
    if(password.length === 0) {
        return 'Enter the password!';
    }

    const resultCheck = Object.entries(paramCheck).map(([param, check]) => [param, check.test(password)]);
    const paramNoMatch = resultCheck.filter(([__param, result]) => result === false)
                                    .map(([param, __result]) => param);
    return `${paramNoMatch.map((param) => paramBoost[param]).join('\n')}`;
}