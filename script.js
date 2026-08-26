/* =====================================================
   SULLY'S DETAILING STUDIO — SITE SCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
    
    /* =====================================================
       LOADER
    ===================================================== */
    window.addEventListener("load", function () {
        const loader = document.getElementById("loader");
        if (loader) {
            setTimeout(function () {
                loader.classList.add("hidden");
            }, 400);
        }
    });

    /* =====================================================
       NAVIGATION & MOBILE MENU
    ===================================================== */
    const navbar = document.querySelector(".navbar");
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
        // Toggle menu
        hamburger.addEventListener("click", function (e) {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle("active");
            hamburger.classList.toggle("open");
            hamburger.setAttribute("aria-expanded", isOpen);
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                hamburger.classList.remove("open");
                hamburger.setAttribute("aria-expanded", "false");
            });
        });

        // Close menu when clicking anywhere outside
        document.addEventListener("click", function (event) {
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                navMenu.classList.remove("active");
                hamburger.classList.remove("open");
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Add navbar background on scroll
    window.addEventListener("scroll", function () {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
    });

    /* =====================================================
       FAQ ACCORDION
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

    const closeLightboxModal = function () {
        if (lightbox) {
            lightbox.classList.remove("open");
        }
    };

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            if (!lightbox || !lightboxImage) return;

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.classList.add("open");
        });
    });

    if (closeLightbox) {
        closeLightbox.addEventListener("click", closeLightboxModal);
    }

    if (lightbox) {
        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                closeLightboxModal();
            }
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightboxModal();
        }
    });

    /* =====================================================
       SCROLL REVEAL ANIMATIONS
    ===================================================== */
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = document.querySelectorAll(
        ".service, .gallery-item, .why-card, .about-content, .section-heading"
    );

    if (!prefersReducedMotion && revealElements.length > 0) {
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
            { threshold: 0.12 }
        );

        revealElements.forEach(function (element) {
            element.style.opacity = "0";
            element.style.transform = "translateY(25px)";
            element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            observer.observe(element);
        });
    }
});
