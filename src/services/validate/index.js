function checkUsernameValidation(value) {
    const isWhitespace = /^(?=.*\s)/;
    if (isWhitespace.test(value)) {
        return {
            isValid: false,
            message: "Username must not contain any whitespace.",
        };
    }

    const isValidLength = /^.{6,16}$/;
    if (!isValidLength.test(value)) {
        return {
            isValid: false,
            message: "Username must be between 6 to 16 characters.",
        };
    }
    return {
        isValid: true,
        message: "",
    };
}

function checkPasswordValidation(value) {
    const isWhitespace = /^(?=.*\s)/;
    if (isWhitespace.test(value)) {
        return {
            isValid: false,
            message: "Password must not contain any whitespace.",
        };
    }

    // const isContainsUppercase = /^(?=.*[A-Z])/;
    // if (!isContainsUppercase.test(value)) {
    //     return {
    //         isValid: false,
    //         message: "Password must have at least one Uppercase Character.",
    //     };
    // }

    // const isContainsLowercase = /^(?=.*[a-z])/;
    // if (!isContainsLowercase.test(value)) {
    //     return {
    //         isValid: false,
    //         message: "Password must have at least one Lowercase Character.",
    //     };
    // }

    // const isContainsNumber = /^(?=.*[0-9])/;
    // if (!isContainsNumber.test(value)) {
    //     return {
    //         isValid: false,
    //         message: "Password must have at least one Number.",
    //     };
    // }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
        return {
            isValid: false,
            message: "Password must be between 8 to 16 characters.",
        };
    }
    return {
        isValid: true,
        message: "",
    };
};

class Validation {
    checkPassword = (value) => checkPasswordValidation(value);
    checkUsername = (value) => checkUsernameValidation(value);
}
const validation = new Validation();
export default validation;