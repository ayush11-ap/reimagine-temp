import { mouseFollower } from "./utils";

export function homeAnim() {
    // Create the main timeline for animations
    let tl = gsap.timeline();

    tl.to(".home-img-cont", {
        scale: 1,
        ease: "back.out(2)",
        stagger: {
            each: 0.05,
            from: "center",
        },
    })
    .to(".home-content", {
        opacity: 1,
        scale: 1,
        ease: "back.out(2)",
        duration: 0.5,
        onComplete: function () {
            // Initialize tilt effect for home-img-cont
            $(".home-img-cont").tilt({
                glare: true,
                maxGlare: 0.4,
                scale: 1.2,
            });

            // Initialize mouse follower if screen width is >= 620px
            if (window.innerWidth >= 620) {
                mouseFollower();
            }
        },
    }, "<+=0.5");

    // Create a timeline for scroll-triggered animations
    let scrollTl = gsap.timeline();

    scrollTl.to([".home-img-cont img"], {
        y: "-110%",
        scale: 1.2,
        duration: 5,
        stagger: 0.08,
        onStart: function () {
            // Update tilt effect when scroll starts
            if (window.innerWidth >= 620) {
                $(".home-img-cont").tilt({
                    glare: false,
                    maxGlare: 0,
                    scale: 1,
                });
            }
        },
        scrollTrigger: {
            trigger: ".home",
            // Uncomment for debugging scroll triggers
            // markers: { startColor: "white", endColor: "white" },
            start: "8% top",
            end: "130% 15%",
            scroller: ".main",
            scrub: true,
        },
    });
}
