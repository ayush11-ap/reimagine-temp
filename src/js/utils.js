export function mouseFollower() {
  let circle = document.querySelector(".circle2");
  let circle_video = document.querySelector(".circle-video");

  gsap.set(circle, { opacity: 1 });

  document.addEventListener("mousemove", (e) => {
      gsap.to([circle_video, circle], {
          top: e.clientY,
          left: e.clientX,
      });
  });

  document.querySelector(".video-section").addEventListener("mouseenter", () => {
      gsap.to([circle_video, circle], {
          opacity: (idx) => (idx === 0 ? 1 : 0),
          scale: (idx) => (idx === 0 ? 1 : 0),
      });
  });

  document.querySelector(".video-section").addEventListener("mouseleave", () => {
      gsap.to([circle_video, circle], {
          opacity: (idx) => (idx === 0 ? 0 : 1),
          scale: (idx) => (idx === 0 ? 0 : 0.5),
      });
  });
}

export function locomotiveJs() {
  const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
          return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
          };
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
