const button = document.getElementById("login-button");
const password = document.getElementById("password");
const username = document.getElementById("username");

button.addEventListener("click", function (e) {
  if (password.value.length > 16) {
    e.preventDefault();
    alert("Password tidak boleh lebih dari 16 karakter");
    password.focus();
  } else if (username.value.length > 24) {
    e.preventDefault();
    alert("Username tidak boleh lebih dari 24 karakter");
    username.focus();
  } else {
    window.location.href = "home.html";
  }
});
