export function referFreind() {


    
    function circularText() {
        const text = document.querySelector(".refer-text p");
        text.innerHTML = text.innerText.split('').map(
            (char, i) => 
                `<span style="transform:rotate(${i * 15}deg)">${char}</span>`
        ).join('');
    }
    circularText();
    
    function elasticInput() {
        const containers = document.querySelectorAll(".input-container");
        const form = document.querySelector("form");
    
        const tl = gsap.timeline({default: {duration: 1}});
    
        const start = "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
        const end = "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";
    
        // Elastic effect
        containers.forEach(container => {
            const input = container.querySelector('.input');
            const line = container.querySelector(".elastic-line");
            const placeholder = container.querySelector(".placeholder");
    
            input.addEventListener('focus', () => {
                console.log("Input focused:", input);
                if (!input.value) {
                    tl.fromTo(line, {attr: {d: start}}, {attr: {d: end}, ease: 'Power2.easeOut', duration: 0.75});
                    tl.to(line, {attr: {d: start}, ease: "elastic.out(3, 0.5)"}, '<50%');
                    tl.to(placeholder, {top: -15, left: 0, scale: 0.8, duration: 0.5, ease: 'Power2.easeOut'}, "<15%");
                }
            });
    
            input.addEventListener("input", (e) => {
                console.log("Input event:", e.target.value);
                if (e.target.type === "text") {
                    let inputText = e.target.value;
                    if (inputText.length > 2) {
                        colorize('#6391E8', line, placeholder);
                    } else {
                        colorize('#FE8C99', line, placeholder);
                    }
                }
    
                // Email validation
                if (e.target.type === "email") {
                    let valid = validateEmail(e.target.value);
                    if (valid) {
                        colorize('#6391E8', line, placeholder);
                    } else {
                        colorize('#FE8C99', line, placeholder);
                    }
                }
            });
        });
    
        // Reverse the placeholder back to its initial position
        form.addEventListener("click", () => {
            containers.forEach(container => {
                const input = container.querySelector('.input');
                const line = container.querySelector(".elastic-line");
                const placeholder = container.querySelector(".placeholder");
    
                if (document.activeElement !== input) {
                    if (!input.value) {
                        gsap.to(placeholder, {
                            top: 0,
                            left: 0,
                            scale: 1,
                            duration: 0.5,
                            ease: 'Power2.easeOut',
                        });
                    }
                }
            });
        });
    }
    
    // Email validation
    function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
    // Color validation
    function colorize(color, line, placeholder) {
        gsap.to(line, {stroke: color, duration: 0.75});
        gsap.to(placeholder, {color: color, duration: 0.75});
    }
    
    elasticInput();
    
    function submitForm() {
        const button = document.querySelector("button");
        const tl2 = gsap.timeline({
            defaults: {
                duration: 0.75,
                ease: "Power2.easeOut"
            }
        });
    
        button.addEventListener("click", (e) => {
            e.preventDefault();
            tl2.to(".refer-left, .upper-div, .refer-right", {
                y: 30,
                opacity: 0,
                pointerEvents: "none"
            });
        });
    }
    
    submitForm();
    
    function efect() {
const lerp = (x, y, a) => x * (1 - a) + y * a;
    let refer_freind = document.querySelector('.refer-friend') 
    let refer_card = document.querySelector('.refer-card') 

        

        
   refer_freind.addEventListener("mousemove", function (detls) {
        const dims = refer_card.getBoundingClientRect();
        const xstart = dims.x;
        const ystart = dims.y;
        
        const xend = dims.x + dims.width;
        const yend = dims.y + dims.height;
        
        const xmrange = gsap.utils.mapRange(xstart, xend, 0, 1, detls.clientX);
        const ymrange = gsap.utils.mapRange(ystart, yend, 0, 1, detls.clientY);





        gsap.to(refer_card, {
            x: lerp(-24, 24, xmrange),
            y: lerp(-24, 24, ymrange),
            ease: "power4",
            duration: 1,
            delay: 0.04
        });
    });

   refer_freind.addEventListener("mouseleave", function () {
        

        gsap.to(refer_card, {
            x: 0,
            y: 0,
            ease: "power4",
            duration: 1,
            delay: 0.04
        });
    });
    }
    efect();

 }