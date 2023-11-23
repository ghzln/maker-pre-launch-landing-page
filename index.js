const emailInput = document.querySelector(".email-input");
const emailForm = document.querySelector(".notify-form");
const submitBttn = document.querySelector(".submit-bttn");
const errorMsg = document.querySelector(".error-msg");

emailForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value;
  const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  if (email.match(emailRegex)) {
    console.log("all good");
    emailInput.classList.remove("error-input");
    errorMsg.style.display = "none";
    return true;
  } else {
    console.log("not good");
    emailInput.classList.add("error-input");
    errorMsg.style.display = "block";
    emailInput.value = "";
    return false;
  }
});
