// DOM CLICK INTERACTION
const buttons = document.querySelectorAll(".click-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Button clicked!");
  });
});

// FORM VALIDATION
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // clear errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  // name validation
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    valid = false;
  }

  // email validation
  const emailPattern = /\S+@\S+\.\S+/;
  if (!emailPattern.test(emailInput.value)) {
    showError(emailInput, "Enter a valid email");
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
}
