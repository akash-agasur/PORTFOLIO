let ngtmode = document.querySelector(".ngt-mode");
let main = document.querySelector(".main");
let body = document.querySelector("body");
let ngtwhite = document.querySelectorAll(".ngt-white");

console.log(ngtwhite);



ngtmode.addEventListener("click", () => {
    // console.log("hello");
    body.style.backgroundColor = "#1C1C2B";
    main.style.backgroundColor = "#1C1C2B";
    ngtwhite.forEach((element) => {
      element.style.color = "#F6F5F7";
    });
    // ngtwhite.style.color = "white"
    // console.log(ngtwhite);

    // main.style.Color = "white";

});


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

