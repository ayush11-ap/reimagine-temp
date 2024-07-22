import { certiData } from "../data/certiData";

const colorData = ["rgb(42,180,224)", "rgb(74, 222, 128)", "rgb(217, 119, 6)", "rgb(113, 113, 122)", "rgb(20, 184, 166)"]; // You can change the color of the horizontal boxes

const lerp = (x, y, a) => x * (1 - a) + y * a;

let certi_img_holder = document.querySelector(".certi-img-holder");
let certi_img_holder_img = document.querySelector(".certi-img-holder img");
let certificate = document.querySelector(".certificates");

export function certificateAnim() {
    let clutter = ``;

    certiData.forEach((dataElem) => {
        clutter += `<div class="certi_box">
                      <div class="left-certi">
                          <div class="certi-text">
                              <h1 class="heading-left-certi">${dataElem.name}
                               <span class="font-['ralewayL'] opacity-40">${dataElem.span}</span></h1>
                          </div>
                      </div>
                      <div class='w-1/2 h-full sm:hidden flex justify-center items-center'>
                          <img class="rounded-md w-full h-[80%] lg:mix-blend-difference" src="${dataElem.src}" alt="">
                      </div>
                      <div class="right-certi">
                          <h1 class="heading-right-certi">${dataElem.description}</h1>
                      </div>
                  </div>`;
    });

    certificate.innerHTML = clutter;

    let certi_boxes = document.querySelectorAll(".certi_box");

    if (window.innerWidth >= 620) {
        certificate.addEventListener("mouseenter", () => {
            gsap.to(certi_img_holder, {
                opacity: 1,
                ease: "power4",
                duration: 1,
            });
        });

        certificate.addEventListener("mouseleave", () => {
            gsap.to(certi_img_holder, {
                opacity: 0,
                ease: "power4",
                duration: 1,
            });
        });

        certi_boxes.forEach((certi_box, idx) => {
            certi_box.addEventListener("mouseenter", function (detls) {
                const dims = certi_box.getBoundingClientRect();
                const top = dims.top;

                certi_img_holder_img.src = certiData[idx].src;
                gsap.to(certi_img_holder, {
                    top: top,
                    ease: "power4",
                    duration: 1,
                });

                gsap.to(certi_box, {
                    backgroundColor: colorData[idx],
                    ease: "power4",
                    duration: 0.7,
                });
            });

            certi_box.addEventListener("mousemove", function (detls) {
                const dims = certi_img_holder.getBoundingClientRect();
                const xstart = dims.x;
                const ystart = dims.y;

                const xend = dims.x + dims.width;
                const yend = dims.y + dims.height;

                const xmrange = gsap.utils.mapRange(xstart, xend, 0, 1, detls.clientX);
                const ymrange = gsap.utils.mapRange(ystart, yend, 0, 1, detls.clientY);

                gsap.to(certi_img_holder, {
                    x: lerp(-20, 20, xmrange),
                    y: lerp(-16, 16, ymrange),
                    ease: "power4",
                    duration: 1,
                    delay: 0.04
                });
            });

            certi_box.addEventListener("mouseleave", function () {
                gsap.to(certi_box, {
                    backgroundColor: "transparent",
                    ease: "power4",
                    duration: 0.7,
                });

                gsap.to(certi_img_holder, {
                    x: 0,
                    y: 0,
                    ease: "power4",
                    duration: 1,
                    delay: 0.04
                });
            });
        });
    }
}
