/* =====================================================
   SULLY'S DETAILING STUDIO
   SITE JAVASCRIPT
===================================================== */


/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("hidden");

        }, 500);

    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", function () {

        navMenu.classList.toggle("active");
        hamburger.classList.toggle("open");

    });


    document.querySelectorAll("#navMenu a").forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");
            hamburger.classList.remove("open");

        });

    });

}



/* =====================================================
   FAQ
===================================================== */

const faqButtons = document.querySelectorAll(".faq-item button");

faqButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const item = button.parentElement;

        document.querySelectorAll(".faq-item").forEach(function (otherItem) {

            if (otherItem !== item) {

                otherItem.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});



/* =====================================================
   GALLERY LIGHTBOX
===================================================== */

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        if (!lightbox || !lightboxImage) return;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("open");

    });

});


if (closeLightbox) {

    closeLightbox.addEventListener("click", function () {

        lightbox.classList.remove("open");

    });

}


if (lightbox) {

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("open");

        }

    });

}


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && lightbox) {

        lightbox.classList.remove("open");

    }

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".service, .gallery-item, .why-card, .about-content, .section-heading"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(element);

});
