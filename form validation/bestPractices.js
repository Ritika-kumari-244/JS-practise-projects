const user = document.getElementById("user");
const userr = document.getElementById("userr");

const pass = document.getElementById("pass");
const passs = document.getElementById("passs")

const conpass = document.getElementById("conpass");
const conpasss = document.getElementById("conpasss")

const email = document.getElementById("email");
const emaill = document.getElementById("emaill")

const validEmailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/

const validationMessages = {
    enterUserName: " **please enter username** ",
    minLengthOfUserName: " **please enter atleast 3 letter username** ",
    onlyAlphabeticUserName: " **please enter only alphabets username** ",

    requiredPass: " **please enter password**",
    minPassLength: " **please enter atleast 6 letter password** ",
    requiredConfirmPass: " **please enter Confirm password**",
    confirmPassNotMatched: " **password don't match** ",

    requiredEmail: " **please enter your email**",
    notAValidEmail: " **please enter a valid email like abc@example.com**"
}

function validation() {


    // this block validate userName and inject validation message inside dom
    if (user.value == "") {
        userr.innerHTML = validationMessages.enterUserName;
    } else if (user.length < 3) {
        userr.innerHTML = validationMessages.minLengthOfUserName;
    } else if (!isNaN(user.value)) {
        userr.innerHTML = validationMessages.onlyAlphabeticUserName;
    } else {
        userr.innerHTML = "";
    }


    // this block validate userPassword and inject validation message inside dom
    if (pass.value == "") {
        passs.innerHTML = validationMessages.requiredPass;
    } else if (pass.value.length < 6) {
        passs.innerHTML = validationMessages.minPassLength;
    } else {
        passs.innerHTML = "";
    }


    // this block validate userConfirmPassword and inject validation message inside dom
    if (conpass.value == "") {
        conpasss.innerHTML = validationMessages.requiredConfirmPass;
    } else if (pass.value == conpass.value) {
        conpasss.innerHTML = "";
    } else {
        conpasss.innerHTML = validationMessages.confirmPassNotMatched;
    }


    // this block validate userEmail and inject validation message inside dom
    if (email.value == "") {
        emaill.innerHTML = validationMessages.requiredEmail;
    }
    else if (!email.value.match(validEmailRegex)) {
        emaill.innerHTML = validationMessages.notAValidEmail;
    } else {
        emaill.innerHTML = "";
    }


    // this return statement does nothing still it is good practice to returm something instead of nothing.
    return false;
}
