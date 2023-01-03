function checkUsernameValidation(value) {
    const isWhitespace = /^(?=.*\s)/;
    if (isWhitespace.test(value)) {
        return {
            isValid: false,
            message: "Tên đăng nhập không được chứa khoảng trắng.",
        };
    }

    const isValidLength = /^.{6,16}$/;
    if (!isValidLength.test(value)) {
        return {
            isValid: false,
            message: "Tên đăng nhập phải có ít nhất 6 ký tự và tối đa 16 ký tự.",
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
            message: "Mật khẩu không được chứa khoảng trắng.",
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
            message: "Mật khẩu phải có ít nhất 8 ký tự và tối đa 16 ký tự.",
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