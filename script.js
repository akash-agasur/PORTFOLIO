let splash = document.querySelector(".splash");
let main = document.querySelector(".main");
let magnet = document.querySelector(".mouse-magnet");
// let left = document.querySelector(".left")





document.body.addEventListener("mousemove", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
  const x = e.clientX;
  const y = e.clientY;

  magnet.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
});


gsap.to(splash, {
  x: "-100%", // slide out to the left
  duration: 2.5, // animation duration
  delay: 1,
  ease: "power2.inOut", // smooth easing
  onComplete: () => {
    splash.style.display = "none"; // hide splash after animation
    gsap.fromTo(
      main,
      { opacity: 0 }, // start invisible
      {
        opacity: 1, // fade in
        duration: 0.3,
        display: "block", // make visible smoothly
        ease: "power2.inOut",
      }
    );
  },
});



window.addEventListener("DOMContentLoaded", () => {
 
  let tl = gsap.timeline();

  tl.from(".nav", {
    y: -50,
    opacity: 0,
    duration: 2,
    ease: "power3.out"
  });

  
  tl.from(".hero .left h2", {
    x: -50,
    opacity: 0,
    duration: 2,
    ease: "power3.out"
  })
  .from(".hero .left h1", {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.5") // overlap animation


  .from(".social-media button", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });


  gsap.to(".hero .right img", {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});




window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate Section Title + Description
  gsap.from(".work-ct h1, .work-ct p", {
    scrollTrigger: {
      trigger: ".work-ct",
      start: "top 80%", // when section enters viewport
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
  });

  // Animate Boxes one by one
  gsap.from(".boxes div", {
    scrollTrigger: {
      trigger: ".boxes",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    stagger: 0.3,
  });

  // Animate Arrows
  gsap.from(".right-arrow .arrow, .left-arrow .arrow", {
    scrollTrigger: {
      trigger: ".work-ct",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
    x: (i, el) => (el.classList.contains("right-arrow") ? 50 : -50),
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
});



