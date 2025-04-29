const form = document.getElementById("rsvp-form");
const wishesList = document.getElementById("wishes-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const attendance = document.getElementById("attendance").value;
  const guests = document.getElementById("guests").value;
  const wish = document.getElementById("wish").value;

  const li = document.createElement("li");
  li.innerHTML = `<strong>${name}</strong>: ${wish}`;
  wishesList.appendChild(li);

  form.reset();
});
