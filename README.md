[![Maintainability](https://api.codeclimate.com/v1/badges/c8e3a5ba955683eac431/maintainability)](https://codeclimate.com/github/nikitakozlovjr/Password-Security/maintainability)

# Password Security

> **Note**
This library is frequently updated and supplemented with new functionality and password evaluation criteria. Therefore, stay tuned for changes in the password evaluation documentation

### Discription
This module helps with deep work with passwords. This module helps with password analysis, gives tips on how to improve it and offers its own solutions for improving the password.

### Password Security Analysis
___

This method is `check()` analyzes the strength of the password. The result of the function is the level of password security. It can be one of three: low, medium, high levels of reliability

```javascript
import PasswordSecurity from 'passwordSecurity';

const password1 = new PasswordSecurity('Kolayn');
const password2 = new PasswordSecurity('Kolayn2');
const password3 = new PasswordSecurity('Kolayn$2');

const security1 = password1.check(); // Low level of password security
const security2 = password2.check();// Middle level of password security
const security3 = password3.check(); // High level of password security
```

### Recommendations for increasing password security

This `boostInfo()` method gives out weak points in the password, correcting which can bring the password reliability to the maximum.

```javascript
const password1 = new PasswordSecurity('guidTv');
const password2 = new PasswordSecurity('ops');

const security1 = password1.boostInfo(); 
// The password length must be greater than 8
// The password must contain at least 1 number
// The password must contain at least 1 special character 
const security2 = password2.boostInfo(); 
// The password length must be greater than 8
// The password must contain at least 1 lowercase letter 
// The password must contain at least 1 special character 
```

### Password strength options

___

This password takes into account the parameters presented in the table when checking the password for strength. If a password meets a certain parameter, it is assigned 1 point. Maximum possible score is 5 points.

|     Param     |Increases reliability|Reduces reliability|
|:-------------:|:---------------:|:-------------:|
| length        | > 8             | <= 8          |
| capitalLetter | >= 1            | < 1           |
|lowercaseLetter| >= 1            | <1            |
|number         | >= 1            | <1            |
|specialCharacters| >= 1          | <1            |

### Reliability assessment algorithm

___

Considering the number of points a password has, it is assigned a strength level depending on it. All levels are presented in the table.

|     Grade     |Number of points|
|:-------------:|:---------------:|
| Low    | 0 - 1 | 
| Middle | 2 - 4 | 
|High    |   5   | 
