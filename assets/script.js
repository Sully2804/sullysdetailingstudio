// ============================================
// SULLY'S DETAILING STUDIO V2
// Premium interactions
// ============================================


// ------------------------------
// MOBILE MENU
// ------------------------------

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");

});


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        hamburger.classList.remove("open");

    });

});


// ------------------------------
// NAVBAR SCROLL EFFECT
// ------------------------------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        navbar.style.background = "rgba(5,5,5,.92)";
        navbar.style.padding = "16px 8%";
        navbar.style.boxShadow = "0 12px 30px rgba(0,0,0,.4)";

    }else{

        navbar.style.background = "rgba(5,5,5,.55)";
        navbar.style.padding = "22px 8%";
        navbar.style.boxShadow = "none";

    }

});


// ------------------------------
// FADE IN ON SCROLL
// ------------------------------

const sections = document.querySelectorAll(".section");

sections.forEach(section => {

    section.classList.add("fade");

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.18
});

sections.forEach(section => observer.observe(section));


// ------------------------------
// FAQ ACCORDION
// ------------------------------

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector("button");

    button.addEventListener("click", () => {

        faqItems.forEach(other => {

            if(other !== item){

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


// ------------------------------
// HERO IMAGE PARALLAX
// ------------------------------

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    let scroll = window.pageYOffset;

    heroImage.style.transform = `translateY(${scroll*0.18}px) scale(1.08)`;

});


// ------------------------------
// BUTTON RIPPLE EFFECT
// ------------------------------

const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .booking-form button");

buttons.forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty("--x",`${x}px`);
        button.style.setProperty("--y",`${y}px`);

    });

});


// ------------------------------
// SERVICE CARD GLOW
// ------------------------------

const cards = document.querySelectorAll(".service-card, .why-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(124,58,237,.18),
        #111111 45%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#111111";

    });

});


// ------------------------------
// GALLERY LIGHTBOX
// ------------------------------

const galleryImages = document.querySelectorAll(".gallery-grid img, .instagram-grid img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `

    <span id="closeLightbox">&times;</span>

    <img id="lightboxImage">

`;

document.body.appendChild(lightbox);

const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("open");
        lightboxImage.src=image.src;

        document.body.style.overflow="hidden";

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("open");

    document.body.style.overflow="auto";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("open");
        document.body.style.overflow="auto";

    }

});


// ------------------------------
// HERO BUTTON SCROLL
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(anchor.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    });

});


// ------------------------------
// IMAGE HOVER ZOOM
// ------------------------------

galleryImages.forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.05)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});


// ------------------------------
// PAGE LOAD ANIMATION
// ------------------------------

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


// ------------------------------
// CONSOLE EASTER EGG 😎
// ------------------------------

console.log(
`Sully's Detailing Studio
Clean is the Minimum.`
);
// ------------------------------
// BEFORE / AFTER SLIDER
// ------------------------------

const comparisonSlider = document.querySelector(".slider");
const afterWrapper = document.querySelector(".after-wrapper");
const sliderLine = document.querySelector(".slider-line");

if (comparisonSlider && afterWrapper && sliderLine) {

    comparisonSlider.addEventListener("input", () => {

        const value = comparisonSlider.value;

        afterWrapper.style.width = `${value}%`;

        sliderLine.style.left = `${value}%`;

    });

}
