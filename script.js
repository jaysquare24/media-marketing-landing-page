const planButton = document.querySelectorAll(".planButton");
const menuButton = document.getElementById("menu-button");
const menuIcon = document.getElementById("menu-icon");
const navigation = document.querySelector(".navigation");



planButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        planButton.forEach(btn => btn.classList.remove(("active")))
        button.classList.add("active");
    })
})


planButton[0].classList.add("active");



menuButton.addEventListener("click", () => {
  const isMenu = menuIcon.classList.toggle("active");

  menuIcon.src = isMenu
    ? "/resource/icons8-close.svg"
    : "/resource/icons8-menu.svg";

    navigation.style.display = isMenu? "block" : "none";
    
});


gsap.registerPlugin(ScrollTrigger);

// Fade Up: all h1 and h2
gsap.utils.toArray("h1, h2").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1.2
  });
});

// Zoom In: nav and buttons
gsap.utils.toArray("nav, button").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    scale: 0.5,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(1.7)",
    onComplete: () => {
        gsap.set("button", { clearProps: "transform" }); 
        // removes inline transform so CSS hover works again
  }
  });
});

// Slide Left: specific container
gsap.from(".experienceContainer", {
  scrollTrigger: {
    trigger: ".container",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  x: -200,
  opacity: 0,
  duration: 1.5
});

// Fade In (opacity increase): paragraphs
gsap.utils.toArray("p").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    opacity: 0.4,
    duration: 1.2,
    ease: "power2.out"
  });
});

