let timer = document.querySelector(".timer");

function updateTime() {
  let now = new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });
  timer.textContent = now;
}

updateTime(); // start me time show kare
setInterval(updateTime, 1000); // har second update kare


document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject =` New message from ${name}`;
    const body =` Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Change this to your email:
    window.location.href = `mailto:agasurakash@gmail.com?subject=${subject}&body=${body}`;
  });