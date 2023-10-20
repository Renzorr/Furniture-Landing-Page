const tl = gsap.timeline({ ease: "power2.out" });

tl.from(
  "header a",
  {
    opacity: 0,
    duration: 2
  }
);

if (window.innerWidth > 1150) {
  tl.to(".bg-hero", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  }, "-=1.4");
}

tl.from(".hero-img", {
  opacity: 0,
  x: "100%",
});

tl.from(
  "h1",
  {
    y: "150%",
  },
  "-=1.2"
);

tl.from("p", {
  y: "150%",
}, "-=0.7");
