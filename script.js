let ngtmode = document.querySelector(".ngt-mode");
let main = document.querySelector(".main");
let body = document.querySelector("body");
let ngtwhite = document.querySelectorAll(".ngt-white");
let stack= document.querySelector(".stack");
let gitline = document.querySelector(".git-line");
let twtline = document.querySelector(".twt-line");
let linkline = document.querySelector(".link-line");
let btnbox = document.querySelector(".btn-box");




ngtmode.addEventListener("click", () => {
    // console.log("hello");
    body.style.backgroundColor = "#1C1C2B";
    main.style.backgroundColor = "#1C1C2B";
    stack.style.backgroundColor = "#1C1C2B";
    gitline.style.backgroundColor = "#F6F5F7";
    twtline.style.backgroundColor = " #F6F5F7";
    linkline.style.backgroundColor = "#F6F5F7";
    btnbox .style.backgroundColor="#1C1C2B";
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

