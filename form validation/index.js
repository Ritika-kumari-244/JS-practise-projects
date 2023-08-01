function validation() {
  let user = document.getElementById("user").value;

  if (user == "") {
    document.getElementById("userr").innerHTML = " **please enter username** ";
  } else if (user.length < 3) {
    document.getElementById("userr").innerHTML =
      " **please enter atleast 3 letter username** ";
  } else if (!isNaN(user)) {
    document.getElementById("userr").innerHTML =
      " **please enter only alphabets username** ";
  } else {
    document.getElementById("userr").innerHTML = "";
  }

  let pass = document.getElementById("pass").value;

  if (pass == "") {
    document.getElementById("passs").innerHTML = " **please enter password**";
  } else if (pass.length < 6) {
    document.getElementById("passs").innerHTML =
      " **please enter atleast 6 letter password** ";
  } else {
    document.getElementById("passs").innerHTML = "";
  }

let conpass = document.getElementById("conpass").value;
if (conpass == "") {
  document.getElementById("conpasss").innerHTML = " **please enter password**";
}else if(pass == conpass){
  document.getElementById("conpasss").innerHTML = "";
} else{
  document.getElementById("conpasss").innerHTML = " **password don't match** ";
}





  let email = document.getElementById("email").value;

  if (email == "") {
    document.getElementById("emaill").innerHTML =
      " **please enter your email**";
  }
   else if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    document.getElementById("emaill").innerHTML =
      " **please enter a valid email**";
  }else{
   document.getElementById("emaill").innerHTML = "";
  }
  

  
return false;

}
