let timer = document.querySelector(".timer");
let ngtmode = document.querySelector(".ngt-mode");
let main = document.querySelector(".main");
let body = document.querySelector("body");
let ngtwhite = document.querySelectorAll(".ngt-white");
// let stack = document.querySelector(".stack");
let gitline = document.querySelector(".git-line");
let twtline = document.querySelector(".twt-line");
let linkline = document.querySelector(".link-line");
let btnbox = document.querySelector(".btn-box");


ngtmode.addEventListener("click", () => {
  // console.log("hello");
  body.style.backgroundColor = "#1C1C2B";
  main.style.backgroundColor = "#1C1C2B";
  // stack.style.backgroundColor = "#1C1C2B";
  gitline.style.backgroundColor = "#F6F5F7";
  twtline.style.backgroundColor = " #F6F5F7";
  linkline.style.backgroundColor = "#F6F5F7";
  btnbox.style.backgroundColor = "#1C1C2B";
  ngtwhite.forEach((element) => {
    element.style.color = "#F6F5F7";
  });
  // ngtwhite.style.color = "white"
  // console.log(ngtwhite);

  // main.style.Color = "white";
});



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