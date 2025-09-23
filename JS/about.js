let magnet = document.querySelector(".mouse-magnet");

document.body.addEventListener("mousemove", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
  const x = e.clientX;
  const y = e.clientY;

  magnet.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
});


gsap.registerPlugin(ScrollTrigger);

// Animate the hero text section
gsap.from(".hero .left", {
  scrollTrigger: {
    trigger: ".hero .left",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

// Animate social media buttons with stagger
gsap.from(".social-media button", {
  scrollTrigger: {
    trigger: ".social-media",
    start: "top 90%",
    toggleActions: "play none none none",
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
});
