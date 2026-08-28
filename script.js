/* =====================================================
   SULLY'S DETAILING STUDIO — SITE SCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.getElementById("loader");

    function hideLoader() {
        if (loader) {
            loader.classList.add("hidden");
        }
    }

    window.addEventListener("load", function () {
        setTimeout(hideLoader, 400);
    });

    /* Safety fallback so the page never stays hidden */
    setTimeout(hideLoader, 3500);


    /* =====================================================
       NAVIGATION & MOBILE MENU
    ===================================================== */

    const navbar = document.querySelector(".navbar");
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {

        hamburger.setAttribute("aria-expanded", "false");

        hamburger.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen = navMenu.classList.toggle("active");

            hamburger.classList.toggle("open", isOpen);

            hamburger.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });


        /* Close menu when clicking a link */

        navMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                hamburger.classList.remove("open");

                hamburger.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });
        });


        /* Close menu when clicking outside */

        document.addEventListener("click", function (event) {

            if (
                !navMenu.contains(event.target) &&
                !hamburger.contains(event.target)
            ) {

                navMenu.classList.remove("active");

                hamburger.classList.remove("open");

                hamburger.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        });

    }


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    updateNavbar();

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqButtons =
        document.querySelectorAll(".faq-item button");

    faqButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const item = button.closest(".faq-item");

            if (!item) return;


            document
                .querySelectorAll(".faq-item")
                .forEach(function (otherItem) {

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

    const galleryImages =
        document.querySelectorAll(".gallery-item img");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const closeLightbox =
        document.getElementById("closeLightbox");


    function closeLightboxModal() {

        if (!lightbox) return;

        lightbox.classList.remove("open");

        document.body.style.overflow = "";
    }


    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            if (!lightbox || !lightboxImage) return;


            lightboxImage.src = image.currentSrc || image.src;

            lightboxImage.alt = image.alt || "";

            lightbox.classList.add("open");

            document.body.style.overflow = "hidden";

        });

    });


    if (closeLightbox) {

        closeLightbox.addEventListener(
            "click",
            closeLightboxModal
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            function (event) {

                if (event.target === lightbox) {
                    closeLightboxModal();
                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {
                closeLightboxModal();
            }

        }
    );


    /* =====================================================
       SCROLL REVEAL ANIMATIONS
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    const revealElements =
        document.querySelectorAll(
            ".service, " +
            ".gallery-item, " +
            ".why-card, " +
            ".about-content, " +
            ".section-heading"
        );


    /*
       Only activate reveal animation when:
       - Motion is allowed
       - IntersectionObserver exists
    */

    if (
        !prefersReducedMotion &&
        revealElements.length > 0 &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold:.12,
                    rootMargin:"0px 0px -40px 0px"
                }
            );


        revealElements.forEach(function (element) {

            element.classList.add("reveal-element");

            observer.observe(element);

        });

    }


    /*
       Fallback CSS for reveal classes.
       Added here rather than modifying content.
    */

    const revealStyle =
        document.createElement("style");

    revealStyle.textContent = `
        .reveal-element {
            opacity:0;
            transform:translateY(25px);
            transition:
                opacity .8s ease,
                transform .8s ease;
        }

        .reveal-visible {
            opacity:1;
            transform:translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
            .reveal-element,
            .reveal-visible {
                opacity:1;
                transform:none;
            }
        }
    `;

    document.head.appendChild(revealStyle);

});
