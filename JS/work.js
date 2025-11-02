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

