function validateForm() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (email.value === "" || password.value === "") {
    alert("Por favor, preencha todos os campos.");
    email.classList.add("invalid");
    password.classList.add("invalid");
    return false;
  }

  if (!validateEmail(email.value)) {
    alert("Por favor, insira um email válido.");
    email.classList.add("invalid");
    return false;
  }

  email.classList.remove("invalid");
  email.classList.add("valid");

  return true;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
