const form = document.getElementById("rsvp-form");
const wishesList = document.getElementById("wishes-list");
const rsvpButton = document.getElementById("rsvp-button");
const rsvpFormSection = document.getElementById("rsvp-form-section");

rsvpButton.addEventListener("click", function() {
  // Show the RSVP form when the button is clicked
  rsvpFormSection.style.display = "block";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const wish = document.getElementById("wish").value;

  const li = document.createElement("li");
  li.innerHTML = `<strong>${name}</strong>: ${wish}`;
  wishesList.appendChild(li);

  form.reset();
});
