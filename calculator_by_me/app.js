let screen = document.querySelector(".output");
let buttons = document.querySelectorAll(".button");

function clickingButton() {
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });
 


}
clickingButton();

