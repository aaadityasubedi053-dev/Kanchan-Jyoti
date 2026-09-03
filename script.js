/* ===========================================
   NAVBAR SCROLL EFFECT
=========================================== */


const header = document.querySelector("header");


window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background =
        "rgba(15,23,42,0.85)";

        header.style.boxShadow =
        "0 15px 40px rgba(0,0,0,0.25)";

    }

    else{

        header.style.background =
        "rgba(255,255,255,0.12)";

        header.style.boxShadow =
        "none";

    }

});



/* ===========================================
   ACTIVE NAVIGATION LINK
=========================================== */


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll",()=>{


    let current = "";


    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 150;


        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });


});

/* ===========================================
   MOBILE MENU FUNCTIONALITY
=========================================== */


const nav = document.querySelector("nav");

const headerElement = document.querySelector("header");


// Create menu button dynamically

const menuBtn = document.createElement("div");

menuBtn.classList.add("menu-btn");

menuBtn.innerHTML = `
<i class="fa-solid fa-bars"></i>
`;


// Add button to header

headerElement.appendChild(menuBtn);



/* ===========================================
   MENU BUTTON CLICK
=========================================== */

menuBtn.addEventListener("click",()=>{


    nav.classList.toggle("active");


    menuBtn.classList.toggle("open");



    if(menuBtn.classList.contains("open")){


        menuBtn.innerHTML = `
        <i class="fa-solid fa-xmark"></i>
        `;


    }

    else{


        menuBtn.innerHTML = `
        <i class="fa-solid fa-bars"></i>
        `;


    }


});



/* ===========================================
   CLOSE MENU AFTER CLICKING LINK
=========================================== */


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        nav.classList.remove("active");


        menuBtn.classList.remove("open");


        menuBtn.innerHTML = `
        <i class="fa-solid fa-bars"></i>
        `;


    });


});



/* ===========================================
   MOBILE MENU STYLE CONTROL
=========================================== */


window.addEventListener("resize",()=>{


    if(window.innerWidth > 768){


        nav.classList.remove("active");


        menuBtn.classList.remove("open");


        menuBtn.innerHTML = `
        <i class="fa-solid fa-bars"></i>
        `;


    }


});

/* ===========================================
   SCROLL REVEAL ANIMATION
=========================================== */


const revealElements = document.querySelectorAll(
    ".about, .card, .gallery-grid img, .contact, footer"
);



const revealObserver = new IntersectionObserver(
    
    (entries)=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){


                entry.target.classList.add("show");


            }


        });


    },

    {

        threshold:0.15

    }

);



revealElements.forEach(element=>{


    element.classList.add("reveal");


    revealObserver.observe(element);


});

/* ===========================================
   GALLERY LIGHTBOX EFFECT
=========================================== */


const galleryImages = document.querySelectorAll(
    ".gallery-grid img"
);



/* CREATE LIGHTBOX ELEMENT */

const lightbox = document.createElement("div");

lightbox.classList.add("lightbox");


lightbox.innerHTML = `

<div class="lightbox-content">

<span class="close-lightbox">
&times;
</span>

<img src="" alt="Gallery Image">

</div>

`;



document.body.appendChild(lightbox);



const lightboxImage = lightbox.querySelector("img");

const closeLightbox = lightbox.querySelector(
    ".close-lightbox"
);



/* ===========================================
   OPEN IMAGE
=========================================== */


galleryImages.forEach(image=>{


    image.addEventListener("click",()=>{


        lightbox.classList.add("active");


        lightboxImage.src = image.src;


    });


});



/* ===========================================
   CLOSE IMAGE
=========================================== */


closeLightbox.addEventListener("click",()=>{


    lightbox.classList.remove("active");


});



/* CLOSE WHEN CLICKING OUTSIDE IMAGE */


lightbox.addEventListener("click",(e)=>{


    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }


});



/* ===========================================
   ESC KEY CLOSE
=========================================== */


document.addEventListener("keydown",(e)=>{


    if(e.key === "Escape"){

        lightbox.classList.remove("active");

    }


});

/* ===========================================
   SMOOTH SCROLL ENHANCEMENT
=========================================== */


document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",(e)=>{


        const target =
        document.querySelector(
            link.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });


        }


    });


});



/* ===========================================
   PARALLAX HERO EFFECT
=========================================== */


const heroBackground =
document.querySelector(".hero-bg");



window.addEventListener("scroll",()=>{


    let scrollValue = window.scrollY;


    if(heroBackground){


        heroBackground.style.transform =

        `scale(1.15) translateY(${scrollValue * 0.25}px)`;


    }


});



/* ===========================================
   IMAGE LAZY LOADING EFFECT
=========================================== */


const images =
document.querySelectorAll("img");



images.forEach(img=>{


    img.loading="lazy";


});



/* ===========================================
   CURSOR GLOW EFFECT
=========================================== */


const cursorGlow =
document.createElement("div");


cursorGlow.classList.add(
    "cursor-glow"
);


document.body.appendChild(cursorGlow);



document.addEventListener(
"mousemove",
(e)=>{


    cursorGlow.style.left =
    e.clientX + "px";


    cursorGlow.style.top =
    e.clientY + "px";


});



/* ===========================================
   BACK TO TOP BUTTON
=========================================== */


const topButton =
document.createElement("button");


topButton.classList.add(
    "top-btn"
);


topButton.innerHTML =
`<i class="fa-solid fa-arrow-up"></i>`;


document.body.appendChild(topButton);



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        topButton.classList.add("show");


    }

    else{


        topButton.classList.remove("show");


    }


});



topButton.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



/* ===========================================
   PAGE LOAD ANIMATION
=========================================== */


window.addEventListener(
"load",
()=>{


    document.body.classList.add(
        "loaded"
    );


});
