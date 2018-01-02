/* JAVASCRIPT */

var loginButton = document.getElementById("login");
var registerButton = document.getElementById("register");
var exampleButton = document.getElementById("example");

var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");


/* Listen to login button. */
loginButton.addEventListener("click", function(e) {
  e.preventDefault;

  registerButton.classList.remove("active");
  exampleButton.classList.remove("active");
  registerForm.classList.remove("register"); // -> removing the class

  void loginForm.offsetWidth; // -> triggering reflow /* The actual magic */ without this it wouldn't work.
  loginButton.classList.add("active");
  loginForm.classList.add("login"); // -> and re-adding the class
}, false);

/* Listen to register button. */
registerButton.addEventListener("click", function(e) {
  e.preventDefault;

  loginButton.classList.remove("active");
  exampleButton.classList.remove("active");
  loginForm.classList.remove("login"); // -> removing the class

  void registerForm.offsetWidth; // -> triggering reflow /* The actual magic */ without this it wouldn't work.
  registerButton.classList.add("active");
  registerForm.classList.add("register"); // -> and re-adding the class
}, false);

/* Listen to register button. */
exampleButton.addEventListener("click", function(e) {
  e.preventDefault;

  loginButton.classList.remove("active");
  registerButton.classList.remove("active");

  loginForm.classList.remove("login");
  registerForm.classList.remove("register");

  void registerForm.offsetWidth; // -> triggering reflow /* The actual magic */ without this it wouldn't work.
  exampleButton.classList.add("active");
  // GO TO ANOTHER PAGE
}, false);

function validateRegisterForm() {
  for (var input in registerForm) {
    if (input.value == "") { return false; }
  }
  var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (pattern.test(registerForm["email"].value) == false) {
    alert('Correo Electrónico inválido');
    return false;
  }
  return true;
}

function validateLoginForm() {
  for (var input in loginForm) {
    if (input.value == "") { return false; }
  }
  var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (pattern.test(loginForm["email"].value) == false) {
    alert('Correo Electrónico inválido');
    return false;
  }
  return true;
}
