const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    status.textContent = "Please enter a valid email.";
    status.style.color = "red";
    return;
  }

  // Simulate successful submission
  status.textContent = "Thank you! Your message has been sent.";
  status.style.color = "green";

  // Clear form
  form.reset();
});

function validateEmail(email) {
  // Simple email regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
