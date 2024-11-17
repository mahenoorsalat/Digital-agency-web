const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
let isOpen = false;
const bar = document.querySelectorAll(".menu span");
const cursor = document.querySelector("#cursor");
const head = document.querySelectorAll("#hero h1")
const hero = document.querySelector("#hero");
const videos = document.querySelectorAll('.project video');

videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
        // Cursor styling on hover
        cursor.style.height = '90px';
        cursor.style.width = '100px';
        cursor.style.background = 'white';
        cursor.style.color = 'black';
        cursor.style.display = 'flex';
        cursor.style.justifyContent = 'center';
        cursor.style.alignItems = 'center';
        cursor.innerHTML = "Explore";
        cursor.style.opacity = "0.9";

       
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        // Reset cursor styling on mouse leave
        cursor.style.height = '10px';
        cursor.style.width = '12px';
        cursor.style.background = '#000';
        cursor.style.color = ''; 
        cursor.style.display = ''; 
        cursor.innerHTML = ""; 
        cursor.style.opacity = "1";

       
        video.pause();
        video.currentTime = 0; 
    });
});



document.body.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
    });
    gsap.to(cursorBgVideo, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
    });
});



hero.addEventListener("mouseenter", function() {
    cursor.style.height = '60px';
    cursor.style.width = '70px';
    cursor.style.background = 'black';
    cursor.style.opacity = "0.9";
});

hero.addEventListener("mouseleave", function() {
    cursor.style.height = '10px';
    cursor.style.width = '12px';
    cursor.style.background = '#000';
    cursor.style.opacity = "1";
});

head.forEach((heading) => {
    heading.addEventListener("mouseenter", function () {
        heading.style.color = "#000";  // Target each heading individually
    });

    heading.addEventListener("mouseleave", function () {
        heading.style.color = "transparent";  // Reset color individually
    });
});

menu.addEventListener("click", function () {
    var tl = gsap.timeline();

    if (!isOpen) {
        tl.to(overlay, {
            right: "0%",
            duration: 0.5,
            ease: "power2.out"
        });

        bar.forEach((span) => {
            span.classList.add('rotate');
        });
    } else {
        tl.to(overlay, {
            right: "-100%",
            duration: 0.5,
            ease: "power2.in"
        });

        bar.forEach((span) => {
            span.classList.remove('rotate');
        });
    }

    isOpen = !isOpen;
});

function firstanimation() {
    gsap.from("#home #nav", {
        scale: 0.1,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power1.out"
    });

    gsap.from("#hero h1", {
        y: 30,
        opacity: 0,
        height: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power1.out"
    });
}

function setupScrollTrigger() {
    gsap.from("#second video", {
        scrollTrigger: {
            trigger: "#second",
            start: "top 80%",
            end: "bottom 20%",
           
        },
        opacity: 0,
        scale: 0.3,
        rotateY: 63,
        duration: 1,
    });


}



window.addEventListener("load", () => {
    firstanimation();
    setupScrollTrigger();
});


let currentScroll = 0;
let isScrollingDown = true;

let arrows = document.querySelectorAll(".arrow");

let tween = gsap.to(".marquee_part", {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease: "linear",
}).totalProgress(0.5);

gsap.set(".marquee_inner", {
    xPercent: -50
});

window.addEventListener("scroll", function () {
    if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
    } else {
        isScrollingDown = false;
    }

    gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1
    });

    arrows.forEach((arrow) => {
        if (isScrollingDown) {
            arrow.classList.remove("active");
        } else {
            arrow.classList.add("active");
        }
    });

    currentScroll = window.pageYOffset;
});





// Select the "tell us" span and the #six section
const tellUsSpan = document.querySelector('#six h1 span');
const sixSection = document.querySelector('#six');

// Add event listeners to toggle the glitch effect
tellUsSpan.addEventListener('mouseenter', () => {
  sixSection.classList.add('glitch-active');
});

tellUsSpan.addEventListener('mouseleave', () => {
  sixSection.classList.remove('glitch-active');
});
