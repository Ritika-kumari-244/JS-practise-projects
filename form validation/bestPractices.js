const user = document.getElementById("user");
const userr = document.getElementById("userr");

const pass = document.getElementById("pass");
const passs = document.getElementById("passs")

const conpass = document.getElementById("conpass");
const conpasss = document.getElementById("conpasss")

const email = document.getElementById("email");
const emaill = document.getElementById("emaill")

const validEmailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/

function validation() {


    // this block validate userName and inject validation message inside dom
    if (user.value == "") {
        userr.innerHTML = " **please enter username** ";
    } else if (user.length < 3) {
        userr.innerHTML =
            " **please enter atleast 3 letter username** ";
    } else if (!isNaN(user.value)) {
        userr.innerHTML =
            " **please enter only alphabets username** ";
    } else {
        userr.innerHTML = "";
    }


    // this block validate userPassword and inject validation message inside dom
    if (pass.value == "") {
        passs.innerHTML = " **please enter password**";
    } else if (pass.value.length < 6) {
        passs.innerHTML =
            " **please enter atleast 6 letter password** ";
    } else {
        passs.innerHTML = "";
    }


    // this block validate userConfirmPassword and inject validation message inside dom
    if (conpass.value == "") {
        conpasss.innerHTML = " **please enter password**";
    } else if (pass.value == conpass.value) {
        conpasss.innerHTML = "";
    } else {
        conpasss.innerHTML = " **password don't match** ";
    }


    // this block validate userEmail and inject validation message inside dom
    if (email.value == "") {
        emaill.innerHTML =
            " **please enter your email**";
    }
    else if (!email.value.match(validEmailRegex)) {
        emaill.innerHTML =
            " **please enter a valid email**";
    } else {
        emaill.innerHTML = "";
    }


    // this return statement does nothing still it is good practice to returm something instead of nothing.
    return false;
}
