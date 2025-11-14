let ngtmode = document.querySelector(".ngt-mode");
let main = document.querySelector(".main");
let body = document.querySelector("body");
let ngtwhite = document.querySelectorAll(".ngt-white");
let stack= document.querySelector(".stack");
let gitline = document.querySelector(".git-line");
let twtline = document.querySelector(".twt-line");
let linkline = document.querySelector(".link-line");
let btnbox = document.querySelector(".btn-box");
let works1 = document.querySelector(".works1");




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





// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
// });






// // GSAP aur ScrollTrigger plugin activate karo
// gsap.registerPlugin(ScrollTrigger);

// // Animation likho
// gsap.to("works1", {
//   scrollTrigger: {
//     trigger: "",   // jab ye element viewport me aaye
//     start: "top 50%",   // kab animation start ho (page ke top se 80%)
//     end: "top 10%",     // kab khatam ho
//     scrub: true,        // smooth animation with scroll
//     markers: true       // debug markers (dekhne ke liye)
//   },
//   opacity: 1,
//   y: 0,
//   // duration: 1
// });




// // // Wait for DOM to fully load
// // window.addEventListener("load", () => {
// //   // Initialize Locomotive Scroll
// //   const scroll = new LocomotiveScroll({
// //     el: document.querySelector(".main"), // Scroll container
// //     smooth: true,                        // Enable smooth scrolling
// //     smartphone: { smooth: true },
// //     tablet: { smooth: true },
// //   });

// //   // Tell ScrollTrigger to use Locomotive Scroll’s scroll position
// //   gsap.registerPlugin(ScrollTrigger);

// //   scroll.on("scroll", ScrollTrigger.update);

// //   ScrollTrigger.scrollerProxy(".main", {
// //     scrollTop(value) {
// //       return arguments.length
// //         ? scroll.scrollTo(value, 0, 0)
// //         : scroll.scroll.instance.scroll.y;
// //     },
// //     getBoundingClientRect() {
// //       return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
// //     },
// //     pinType: document.querySelector(".main").style.transform ? "transform" : "fixed",
// //   });

// //   // Example GSAP animation (you can remove or customize this)
// //   // gsap.from(".hero-section .name", {
// //   //   opacity: 0,
// //   //   y: 50,
// //   //   duration: 1.2,
// //   //   scrollTrigger: {
// //   //     trigger: ".hero-section .name",
// //   //     scroller: ".main",
// //   //     start: "top 80%",
// //   //     toggleActions: "play none none reverse",
//   //   },
//   // });

//   // Refresh ScrollTrigger after everything is set up
//   ScrollTrigger.addEventListener("refresh", () => scroll.update());
//   ScrollTrigger.refresh();
// });
