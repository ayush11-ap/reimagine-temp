
let allImg = document.querySelectorAll(".nav-img");
const allElem = document.querySelectorAll(".link");

function menuAnim() {
  allElem.forEach((elem, idx) => {
    let img = allImg[idx];

    elem.addEventListener("mouseenter", () => {
      img.classList.add("z-[10]");
     
      gsap.to(img, {
        rotate: 0,
        duration: 0.9,
        ease: "expo.inOut",
      });
    });

    elem.addEventListener("mouseleave", () => {
      img.classList.remove("z-[10]");
      
      gsap.to(img, {
        rotate: -90,
        duration: 0.9,
        ease: "expo.inOut",
      });
    });






    
  });
}

export function menuAnimation() {
  let menuStart = document.querySelector(".menu");
  let menuComplete = document.querySelector(".menu-complete");

  let tl = gsap.timeline({
    paused: true,
  });

  tl.to(".inner", {
    height: () => {
      return window.innerWidth <= 620 ? "108vh" : "120vh";
    },
    duration: 1.5,
    ease: "power4.out",
  })
  .to(
    ".menuContent",
    {
      delay: () => {
        return window.innerWidth <= 620 ? "-0.08" : "-0.3";
      },
      height: () => {
        return window.innerWidth <= 620 ? "95%" : "90%";
      },
      duration: 1.3,
      ease: "power4.out",
    },
    "<"
  )
  .to(
    ".link a",
    {
      y: 0,
      duration: 1.3,
      ease: "power3",
    },
    "<+=0.5"
  )
  .from(
    allImg,
    {
      rotate: 90,
      stagger: 0.1,
      duration: 1,
      ease: "expo",
    },
    "<-=0.2"
  )
  .to(
    ".svg-cont",
    {
      height: "5px",
      duration: 1.3,
      ease: "power4.out",
      onComplete: menuAnim,
    },
    "<+=0.3"
  );

  menuStart.addEventListener("click", () => {
    tl.play();
  });

  menuComplete.addEventListener("click", () => {
    tl.reverse();
  });
}
