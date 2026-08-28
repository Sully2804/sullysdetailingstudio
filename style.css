/* =========================================================
   SULLY'S DETAILING STUDIO — LUXURY CSS
   Premium dark / purple automotive detailing website
   ========================================================= */

/* ================= IMPORT FONTS ================= */

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');


/* ================= RESET ================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
    scroll-padding-top:90px;
}

body{
    background:#050505;
    color:#f4f4f4;
    font-family:"DM Sans",sans-serif;
    overflow-x:hidden;
    line-height:1.6;
}

img{
    display:block;
    max-width:100%;
}

a{
    text-decoration:none;
    color:inherit;
}

button,
input,
textarea,
select{
    font:inherit;
}

button{
    -webkit-tap-highlight-color:transparent;
}

::selection{
    background:rgba(124,58,237,.35);
    color:#fff;
}


/* ================= VARIABLES ================= */

:root{

    --bg:#050505;
    --surface:#0a0a0b;
    --surface2:#121214;
    --surface3:#17171a;

    --text:#ffffff;
    --muted:#9a9aa2;
    --line:rgba(255,255,255,.08);

    --purple:#7c3aed;
    --purple2:#9f5bff;
    --purpleGlow:rgba(124,58,237,.45);

    --radius:24px;

    --shadow:0 30px 80px rgba(0,0,0,.55);
}


/* ================= SECTIONS ================= */

section{
    position:relative;
}

.section{
    padding:140px 7vw;
}

.section-number{
    display:inline-block;
    color:var(--purple2);
    letter-spacing:3px;
    font-size:.75rem;
    font-weight:700;
    margin-bottom:20px;
    text-transform:uppercase;
}

.section-heading{
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    gap:80px;
    margin-bottom:70px;
}

.section-heading h2{
    font-family:"Manrope",sans-serif;
    font-size:clamp(2.6rem,6vw,5rem);
    line-height:.95;
    letter-spacing:-3px;
    font-weight:800;
}

.section-heading h2 em{
    color:var(--purple2);
    font-style:normal;
}

.section-heading p{
    color:var(--muted);
    max-width:380px;
    font-size:1rem;
}


/* ================= LOADER ================= */

#loader{
    position:fixed;
    inset:0;
    background:#050505;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    z-index:999999;
    transition:opacity .8s ease,visibility .8s ease;
}

#loader.hidden{
    opacity:0;
    visibility:hidden;
    pointer-events:none;
}

#loader img{
    width:90px;
    animation:logoFloat 2s ease-in-out infinite;
}

#loader span{
    margin-top:25px;
    color:#777;
    font-size:.7rem;
    letter-spacing:5px;
    text-transform:uppercase;
    text-align:center;
}

@keyframes logoFloat{
    0%,100%{
        transform:translateY(0) scale(1);
        opacity:.65;
    }

    50%{
        transform:translateY(-8px) scale(1.05);
        opacity:1;
    }
}


/* ================= NAVBAR ================= */

.navbar{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:84px;
    padding:0 5vw;
    display:flex;
    justify-content:space-between;
    align-items:center;
    z-index:10000;
    transition:.35s ease;
    border-bottom:1px solid transparent;
}

.navbar.scrolled{
    background:rgba(5,5,5,.82);
    backdrop-filter:blur(22px);
    -webkit-backdrop-filter:blur(22px);
    border-bottom:1px solid rgba(255,255,255,.06);
}

.brand{
    display:flex;
    align-items:center;
    gap:14px;
}

.brand img{
    width:42px;
    height:42px;
    object-fit:contain;
}

.brand strong{
    display:block;
    font-size:.92rem;
    letter-spacing:1px;
    font-family:"Manrope",sans-serif;
}

.brand small{
    display:block;
    color:#888;
    font-size:.65rem;
    letter-spacing:3px;
}

nav{
    display:flex;
    align-items:center;
    gap:34px;
}

nav a{
    color:#d4d4d8;
    font-size:.82rem;
    font-weight:500;
    position:relative;
    transition:.3s ease;
}

nav a:hover{
    color:#fff;
}

nav a::after{
    content:"";
    position:absolute;
    left:0;
    bottom:-10px;
    width:0;
    height:1px;
    background:var(--purple2);
    transition:.3s ease;
}

nav a:hover::after{
    width:100%;
}

.nav-cta{
    padding:13px 20px;
    border-radius:999px;
    background:linear-gradient(135deg,var(--purple),var(--purple2));
    color:#fff !important;
    box-shadow:0 8px 30px rgba(124,58,237,.3);
}

.nav-cta::after{
    display:none;
}


/* ================= HAMBURGER ================= */

.hamburger{
    display:none;
    width:44px;
    height:44px;
    background:none;
    border:none;
    cursor:pointer;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:6px;
}

.hamburger span{
    display:block;
    height:2px;
    width:24px;
    background:#fff;
    transition:.35s ease;
}

.hamburger.open span:nth-child(1){
    transform:translateY(8px) rotate(45deg);
}

.hamburger.open span:nth-child(2){
    opacity:0;
}

.hamburger.open span:nth-child(3){
    transform:translateY(-8px) rotate(-45deg);
}


/* ================= HERO ================= */

.hero{
    min-height:100vh;
    min-height:100svh;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    overflow:hidden;
    background:#000;
}

.hero-image{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center;
    filter:brightness(.32) contrast(1.15) saturate(.95);
    transform:scale(1.05);
}

.hero::after{
    content:"";
    position:absolute;
    inset:0;
    z-index:1;
    background:
        radial-gradient(
            circle at center,
            rgba(124,58,237,.18),
            transparent 42%
        ),
        linear-gradient(
            to bottom,
            rgba(5,5,5,.55),
            rgba(5,5,5,.15),
            rgba(5,5,5,.98)
        );
}

.hero-vignette{
    position:absolute;
    inset:0;
    background:
        linear-gradient(
            90deg,
            #050505,
            transparent 20%,
            transparent 80%,
            #050505
        );
    z-index:2;
    pointer-events:none;
}

.hero-content{
    position:relative;
    z-index:5;
    width:100%;
    max-width:900px;
    padding:120px 30px 80px;
}

.hero-kicker{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:14px;
    color:#c89dff;
    letter-spacing:3px;
    font-size:.75rem;
    font-weight:700;
    margin-bottom:35px;
}

.hero-kicker span{
    width:40px;
    height:1px;
    background:#c89dff;
}

.hero h1{
    font-family:"Manrope",sans-serif;
    font-size:clamp(4rem,9vw,8rem);
    line-height:.88;
    letter-spacing:-5px;
    margin-bottom:30px;
    font-weight:800;
}

.hero h1 em{
    color:var(--purple2);
    font-style:normal;
    text-shadow:0 0 30px rgba(159,91,255,.3);
}

.hero p{
    max-width:650px;
    margin:auto;
    color:#d0d0d5;
    font-size:1.1rem;
}

.hero-actions{
    margin-top:45px;
    display:flex;
    justify-content:center;
    gap:18px;
    flex-wrap:wrap;
}

.hero-location{
    margin-top:60px;
    color:#8d8d95;
    letter-spacing:4px;
    font-size:.7rem;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
}

.location-dot{
    width:8px;
    height:8px;
    flex:0 0 8px;
    border-radius:50%;
    background:var(--purple2);
    box-shadow:0 0 15px var(--purpleGlow);
}

.hero-scroll{
    position:absolute;
    bottom:40px;
    left:50%;
    transform:translateX(-50%);
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:12px;
    font-size:.65rem;
    letter-spacing:4px;
    color:#888;
    z-index:5;
    white-space:nowrap;
}

.hero-scroll span{
    width:2px;
    height:55px;
    background:linear-gradient(var(--purple2),transparent);
    animation:scrollPulse 2s infinite;
}

@keyframes scrollPulse{
    0%,100%{
        opacity:.3;
        transform:translateY(0);
    }

    50%{
        opacity:1;
        transform:translateY(10px);
    }
}


/* ================= BUTTONS ================= */

.button{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:12px;
    padding:17px 28px;
    border-radius:999px;
    font-weight:700;
    transition:.35s ease;
    min-height:54px;
}

.button span{
    transition:.35s ease;
}

.button:hover span{
    transform:translateX(4px);
}

.button-primary{
    background:linear-gradient(135deg,var(--purple),var(--purple2));
    color:#fff;
    box-shadow:0 15px 45px rgba(124,58,237,.35);
}

.button-primary:hover{
    transform:translateY(-4px);
    box-shadow:0 22px 60px rgba(124,58,237,.45);
}

.button-ghost{
    border:1px solid rgba(255,255,255,.14);
    background:rgba(255,255,255,.05);
    backdrop-filter:blur(14px);
    -webkit-backdrop-filter:blur(14px);
}

.button-ghost:hover{
    background:rgba(255,255,255,.1);
    transform:translateY(-4px);
}


/* ================= INTRO STRIP ================= */

.intro-strip{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    border-top:1px solid var(--line);
    border-bottom:1px solid var(--line);
    background:#070707;
}

.intro-strip div{
    padding:55px 40px;
    border-right:1px solid var(--line);
}

.intro-strip div:last-child{
    border-right:none;
}

.intro-strip span{
    color:var(--purple2);
    font-size:.75rem;
    letter-spacing:3px;
    display:block;
    margin-bottom:14px;
}

.intro-strip p{
    font-family:"Manrope",sans-serif;
    font-size:1.25rem;
    line-height:1.3;
    letter-spacing:-.5px;
}


/* ================= PURPLE DIVIDER GLOW ================= */

.section::before{
    content:"";
    position:absolute;
    top:0;
    left:50%;
    transform:translateX(-50%);
    width:180px;
    height:1px;
    background:linear-gradient(
        90deg,
        transparent,
        var(--purple2),
        transparent
    );
    opacity:.45;
}


/* =========================================================
   SERVICES
   ========================================================= */

.services-section{
    background:#050505;
}

.services-list{
    display:flex;
    flex-direction:column;
    gap:28px;
}

.service{
    display:grid;
    grid-template-columns:90px minmax(260px,380px) minmax(0,1fr);
    gap:35px;
    align-items:center;
    padding:28px;
    border:1px solid rgba(255,255,255,.06);
    border-radius:28px;
    background:linear-gradient(145deg,#101012,#080809);
    transition:border-color .45s ease,
                box-shadow .45s ease,
                transform .45s ease;
    position:relative;
    overflow:hidden;
}

.service::before{
    content:"";
    position:absolute;
    inset:0;
    background:radial-gradient(
        circle at left,
        rgba(124,58,237,.10),
        transparent 65%
    );
    opacity:0;
    transition:.45s ease;
    pointer-events:none;
}

.service:hover{
    transform:translateY(-6px);
    border-color:rgba(168,85,247,.35);
    box-shadow:0 30px 80px rgba(0,0,0,.55);
}

.service:hover::before{
    opacity:1;
}

.service:nth-child(even){
    grid-template-columns:minmax(0,1fr) minmax(260px,380px) 90px;
}

.service:nth-child(even) .service-number{
    order:3;
    text-align:right;
}

.service:nth-child(even) .service-image{
    order:2;
}

.service:nth-child(even) .service-info{
    order:1;
}

.service-number{
    font-family:"Manrope",sans-serif;
    font-size:1.1rem;
    color:#6b6b73;
    letter-spacing:2px;
    position:relative;
    z-index:2;
}

.service-image{
    border-radius:20px;
    overflow:hidden;
    height:260px;
    position:relative;
    z-index:2;
    background:#111;
}

.service-image img{
    width:100%;
    height:100%;
    object-fit:cover;
    transition:.6s ease;
}

.service:hover .service-image img{
    transform:scale(1.06);
}

.service-info{
    position:relative;
    z-index:2;
    min-width:0;
}

.service-info h3{
    font-family:"Manrope",sans-serif;
    font-size:2rem;
    margin-bottom:15px;
}

.service-info p{
    color:#a0a0a8;
    font-size:.96rem;
    line-height:1.8;
    margin-bottom:22px;
}

.service-info span{
    color:#b983ff;
    font-size:.8rem;
    letter-spacing:2px;
    font-weight:700;
}


/* ================= FEATURED PPF ================= */

.service-featured{
    border:1px solid rgba(168,85,247,.45);
    background:
        linear-gradient(
            145deg,
            rgba(35,20,55,.95),
            rgba(10,10,15,.98)
        );
}

.service-featured::after{
    content:"";
    position:absolute;
    inset:0;
    background:
        radial-gradient(
            circle at right,
            rgba(168,85,247,.15),
            transparent 55%
        );
    pointer-events:none;
}

.service-tag{
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding:8px 14px;
    margin-bottom:18px;
    border-radius:999px;
    background:rgba(168,85,247,.12);
    border:1px solid rgba(168,85,247,.25);
    color:#d9b5ff;
    letter-spacing:2px;
    font-size:.65rem;
    font-weight:700;
}


/* =========================================================
   OPTIONAL EXTRAS
   ========================================================= */

.extras-section{
    padding:140px 7vw;
    background:
        radial-gradient(
            circle at top,
            rgba(124,58,237,.08),
            transparent 55%
        ),
        #080808;
}

.extras-heading{
    text-align:center;
    margin-bottom:60px;
}

.extras-heading span{
    color:#b983ff;
    letter-spacing:4px;
    font-size:.72rem;
    font-weight:700;
}

.extras-heading h2{
    margin-top:15px;
    font-family:"Manrope",sans-serif;
    font-size:clamp(2.4rem,5vw,4rem);
    line-height:1;
}

.extras-heading em{
    color:var(--purple2);
    font-style:normal;
}

.extras{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:14px;
}

.extras span{
    padding:15px 22px;
    border-radius:999px;
    background:rgba(255,255,255,.03);
    border:1px solid rgba(255,255,255,.08);
    color:#c5c5ca;
    transition:.35s ease;
    font-size:.82rem;
}

.extras span:hover{
    color:white;
    background:rgba(124,58,237,.12);
    border-color:rgba(168,85,247,.4);
    transform:translateY(-3px);
}


/* =========================================================
   GALLERY
   ========================================================= */

.work-section{
    background:#050505;
}

.gallery{
    display:grid;
    grid-template-columns:repeat(12,minmax(0,1fr));
    grid-auto-rows:110px;
    gap:14px;
}

.gallery-item{
    position:relative;
    overflow:hidden;
    border-radius:22px;
    cursor:pointer;
    background:#111;
    min-width:0;
}

.gallery-item img{
    width:100%;
    height:100%;
    object-fit:cover;
    transition:.55s ease;
    filter:brightness(.92);
}

.gallery-item:hover img{
    transform:scale(1.06);
    filter:brightness(1);
}

.gallery-large{
    grid-column:span 7;
    grid-row:span 4;
}

.gallery-wide{
    grid-column:span 8;
    grid-row:span 3;
}

.gallery-item:not(.gallery-large):not(.gallery-wide){
    grid-column:span 5;
    grid-row:span 2;
}

.gallery-caption{
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    z-index:2;
    padding:24px;
    background:
        linear-gradient(
            to top,
            rgba(0,0,0,.82),
            transparent
        );
    color:white;
    font-size:.72rem;
    letter-spacing:3px;
    font-weight:700;
}

.gallery-item::after{
    content:"VIEW";
    position:absolute;
    inset:0;
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(124,58,237,.15);
    backdrop-filter:blur(2px);
    -webkit-backdrop-filter:blur(2px);
    letter-spacing:4px;
    font-size:.8rem;
    font-weight:700;
    opacity:0;
    transition:.35s ease;
}

.gallery-item:hover::after{
    opacity:1;
}


/* =========================================================
   BEFORE / AFTER
   ========================================================= */

.before-after-section{
    padding:150px 7vw;
    background:#080808;
}

.before-after{
    position:relative;
    max-width:1200px;
    margin:auto;
    height:680px;
    border-radius:28px;
    overflow:hidden;
    border:1px solid rgba(255,255,255,.08);
    box-shadow:0 35px 100px rgba(0,0,0,.55);
}

.before-image,
.after-image{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    object-fit:cover;
}

.after-wrapper{
    position:absolute;
    inset:0 auto 0 0;
    width:50%;
    overflow:hidden;
    z-index:2;
}

.after-wrapper .after-image{
    width:100%;
    height:100%;
    object-position:left center;
}

.slider{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    opacity:0;
    cursor:ew-resize;
    z-index:20;
}

.slider-line{
    position:absolute;
    top:0;
    bottom:0;
    left:50%;
    width:2px;
    background:white;
    z-index:10;
}

.slider-line::before{
    content:"";
    position:absolute;
    inset:0;
    width:8px;
    left:-3px;
    background:rgba(255,255,255,.15);
}

.slider-line::after{
    content:"↔";
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width:58px;
    height:58px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:white;
    color:#111;
    font-size:20px;
    font-weight:700;
    box-shadow:0 10px 35px rgba(0,0,0,.45);
}

.before-label,
.after-label{
    position:absolute;
    top:22px;
    z-index:30;
    padding:9px 16px;
    border-radius:999px;
    background:rgba(0,0,0,.55);
    backdrop-filter:blur(16px);
    -webkit-backdrop-filter:blur(16px);
    border:1px solid rgba(255,255,255,.12);
    letter-spacing:3px;
    font-size:.65rem;
    font-weight:700;
}

.before-label{
    left:22px;
}

.after-label{
    right:22px;
}

.before-after::after{
    content:"";
    position:absolute;
    inset:auto 10% -80px 10%;
    height:120px;
    background:radial-gradient(
        circle,
        rgba(124,58,237,.28),
        transparent 70%
    );
    filter:blur(45px);
    pointer-events:none;
}


/* =========================================================
   ABOUT
   ========================================================= */

.about-section{
    padding:160px 7vw;
    display:grid;
    grid-template-columns:.95fr 1.05fr;
    align-items:center;
    gap:90px;
    background:#060606;
}

.about-image{
    position:relative;
}

.about-image::before{
    content:"";
    position:absolute;
    inset:25px -25px -25px 25px;
    border:1px solid rgba(168,85,247,.18);
    border-radius:28px;
    z-index:-1;
}

.about-image::after{
    content:"";
    position:absolute;
    inset:auto 10% -40px 10%;
    height:90px;
    background:radial-gradient(
        circle,
        rgba(124,58,237,.30),
        transparent 70%
    );
    filter:blur(40px);
    z-index:-1;
}

.about-image img{
    width:100%;
    border-radius:26px;
    object-fit:cover;
    box-shadow:0 35px 90px rgba(0,0,0,.55);
}

.about-content h2{
    font-family:"Manrope",sans-serif;
    font-size:clamp(2.8rem,6vw,5rem);
    line-height:.95;
    letter-spacing:-3px;
    margin-bottom:30px;
}

.about-content h2 em{
    color:var(--purple2);
    font-style:normal;
}

.about-lead{
    font-size:1.18rem;
    color:white;
    margin-bottom:26px;
    max-width:600px;
}

.about-content p{
    color:#9b9ba4;
    margin-bottom:22px;
    line-height:1.9;
}

.about-signature{
    margin-top:45px;
    padding-top:25px;
    border-top:1px solid rgba(255,255,255,.08);
    font-family:"Manrope",sans-serif;
    letter-spacing:3px;
    font-size:.95rem;
    font-weight:700;
}

.about-signature span{
    display:block;
    margin-top:10px;
    color:#7d7d87;
    font-size:.7rem;
    letter-spacing:3px;
}


/* =========================================================
   WHY CHOOSE US
   ========================================================= */

.why-section{
    padding:150px 7vw;
    background:
        radial-gradient(
            circle at top,
            rgba(124,58,237,.08),
            transparent 55%
        ),
        #080808;
}

.why-intro{
    text-align:center;
    margin-bottom:70px;
}

.why-intro h2{
    font-family:"Manrope",sans-serif;
    font-size:clamp(2.5rem,5vw,4.5rem);
    line-height:.95;
    letter-spacing:-2px;
    margin-top:18px;
}

.why-intro h2 em{
    color:var(--purple2);
    font-style:normal;
}

.why-grid{
    display:grid;
    grid-template-columns:repeat(4,minmax(0,1fr));
    gap:22px;
}

.why-card{
    position:relative;
    overflow:hidden;
    padding:38px 28px;
    border-radius:24px;
    background:rgba(255,255,255,.03);
    backdrop-filter:blur(16px);
    -webkit-backdrop-filter:blur(16px);
    border:1px solid rgba(255,255,255,.08);
    transition:.4s ease;
}

.why-card::before{
    content:"";
    position:absolute;
    inset:0;
    background:linear-gradient(
        180deg,
        rgba(124,58,237,.18),
        transparent 60%
    );
    opacity:0;
    transition:.4s ease;
    pointer-events:none;
}

.why-card:hover{
    transform:translateY(-8px);
    border-color:rgba(168,85,247,.35);
    box-shadow:0 20px 60px rgba(0,0,0,.4);
}

.why-card:hover::before{
    opacity:1;
}

.why-card span{
    display:block;
    position:relative;
    z-index:2;
    color:#8d8d95;
    font-size:.72rem;
    letter-spacing:3px;
    margin-bottom:25px;
}

.why-card i{
    position:relative;
    z-index:2;
    display:block;
    font-size:2rem;
    color:#b983ff;
    margin-bottom:22px;
}

.why-card h3{
    position:relative;
    z-index:2;
    font-family:"Manrope",sans-serif;
    margin-bottom:12px;
    font-size:1.2rem;
}

.why-card p{
    position:relative;
    z-index:2;
    color:#9b9ba4;
    line-height:1.8;
    font-size:.92rem;
}


/* =========================================================
   FAQ
   ========================================================= */

.faq-section{
    background:#050505;
}

.faq{
    max-width:900px;
    margin:auto;
}

.faq-item{
    border-bottom:1px solid rgba(255,255,255,.08);
}

.faq-item button{
    width:100%;
    padding:28px 0;
    background:none;
    border:none;
    color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:25px;
    cursor:pointer;
    font-size:1rem;
    font-weight:600;
    text-align:left;
    transition:.3s ease;
}

.faq-item button:hover{
    color:#d9b5ff;
}

.faq-item button::after{
    content:"+";
    color:#b983ff;
    font-size:1.4rem;
    flex:0 0 auto;
    transition:.3s ease;
}

.faq-item.active button::after{
    content:"−";
    transform:rotate(180deg);
}

.answer{
    max-height:0;
    overflow:hidden;
    color:#9a9aa3;
    line-height:1.9;
    transition:max-height .45s ease,padding .45s ease;
}

.faq-item.active .answer{
    max-height:300px;
    padding:0 40px 28px 0;
}


/* =========================================================
   CONTACT
   ========================================================= */

.contact-section{
    padding:160px 7vw;
    display:grid;
    grid-template-columns:.9fr 1.1fr;
    gap:70px;
    align-items:start;
    background:
        radial-gradient(
            circle at top left,
            rgba(124,58,237,.10),
            transparent 45%
        ),
        #070707;
}

.contact-copy h2{
    font-family:"Manrope",sans-serif;
    font-size:clamp(2.8rem,6vw,5rem);
    line-height:.95;
    letter-spacing:-3px;
    margin:20px 0 28px;
}

.contact-copy h2 em{
    color:var(--purple2);
    font-style:normal;
}

.contact-copy p{
    color:#a0a0aa;
    margin-bottom:35px;
    max-width:420px;
}

.contact-email{
    padding-top:30px;
    border-top:1px solid rgba(255,255,255,.08);
}

.contact-email span{
    display:block;
    font-size:.7rem;
    letter-spacing:3px;
    color:#777;
    margin-bottom:10px;
}

.contact-email a{
    font-size:1rem;
    color:white;
    transition:.3s ease;
    word-break:break-word;
}

.contact-email a:hover{
    color:#b983ff;
}


/* =========================================================
   BOOKING FORM
   ========================================================= */

.booking-form{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
}

.form-field{
    display:flex;
    flex-direction:column;
    gap:10px;
}

.form-full{
    grid-column:1/-1;
}

.booking-form label{
    color:#8d8d95;
    font-size:.78rem;
    letter-spacing:2px;
    text-transform:uppercase;
}

.booking-form input,
.booking-form textarea,
.booking-form select{
    width:100%;
    background:rgba(255,255,255,.03);
    border:1px solid rgba(255,255,255,.08);
    border-radius:16px;
    padding:18px;
    color:white;
    outline:none;
    transition:.3s ease;
}

.booking-form input,
.booking-form select{
    min-height:58px;
}

.booking-form textarea{
    resize:vertical;
    min-height:170px;
}

.booking-form input::placeholder,
.booking-form textarea::placeholder{
    color:#6d6d75;
}

.booking-form select{
    color:#b5b5bb;
}

.booking-form select option{
    background:#111114;
    color:#fff;
}

.booking-form input:focus,
.booking-form textarea:focus,
.booking-form select:focus{
    border-color:#a855f7;
    box-shadow:0 0 0 3px rgba(124,58,237,.15);
    background:rgba(255,255,255,.05);
}

.form-submit{
    grid-column:1/-1;
    margin-top:15px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:14px;
    border:none;
    cursor:pointer;
    border-radius:999px;
    padding:20px;
    background:linear-gradient(
        135deg,
        var(--purple),
        var(--purple2)
    );
    color:white;
    font-weight:700;
    letter-spacing:1px;
    box-shadow:0 18px 45px rgba(124,58,237,.35);
    transition:.35s ease;
}

.form-submit:hover{
    transform:translateY(-4px);
    box-shadow:0 28px 60px rgba(124,58,237,.45);
}

.form-submit span{
    transition:.3s ease;
}

.form-submit:hover span{
    transform:translateX(5px);
}


/* =========================================================
   INSTAGRAM
   ========================================================= */

.instagram-section{
    padding:120px 7vw;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    gap:30px;
    border-top:1px solid rgba(255,255,255,.08);
    border-bottom:1px solid rgba(255,255,255,.08);
    background:#050505;
}

.instagram-section > div{
    min-width:0;
}

.instagram-section span{
    color:#b983ff;
    font-size:.72rem;
    letter-spacing:4px;
    font-weight:700;
}

.instagram-section h2{
    margin-top:12px;
    font-family:"Manrope",sans-serif;
    font-size:clamp(2rem,5vw,3.4rem);
    overflow-wrap:anywhere;
}

.instagram-section h2 a{
    transition:.3s ease;
}

.instagram-section h2 a:hover{
    color:#b983ff;
}

.instagram-link{
    padding:16px 24px;
    border-radius:999px;
    border:1px solid rgba(168,85,247,.45);
    color:#d9b5ff;
    letter-spacing:2px;
    font-size:.78rem;
    font-weight:700;
    transition:.35s ease;
    flex:0 0 auto;
}

.instagram-link:hover{
    background:linear-gradient(
        135deg,
        var(--purple),
        var(--purple2)
    );
    color:white;
    border-color:transparent;
    box-shadow:0 15px 40px rgba(124,58,237,.35);
}


/* =========================================================
   FOOTER
   ========================================================= */

footer{
    padding:90px 7vw 40px;
    background:#030303;
}

.footer-brand{
    display:flex;
    align-items:center;
    gap:18px;
    margin-bottom:45px;
}

.footer-brand img{
    width:70px;
    height:70px;
    object-fit:contain;
}

.footer-brand strong{
    display:block;
    font-family:"Manrope",sans-serif;
    font-size:1rem;
    letter-spacing:2px;
}

.footer-brand span{
    display:block;
    margin-top:6px;
    color:#777;
    letter-spacing:3px;
    font-size:.68rem;
}

.footer-links{
    display:flex;
    gap:34px;
    flex-wrap:wrap;
    margin-bottom:50px;
}

.footer-links a{
    color:#b1b1b7;
    font-size:.82rem;
    transition:.3s ease;
}

.footer-links a:hover{
    color:#b983ff;
}

.footer-bottom{
    padding-top:25px;
    border-top:1px solid rgba(255,255,255,.08);
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    gap:15px;
    color:#666;
    font-size:.75rem;
    letter-spacing:2px;
}


/* =========================================================
   LIGHTBOX
   ========================================================= */

#lightbox{
    position:fixed;
    inset:0;
    z-index:20000;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:40px;
    background:rgba(0,0,0,.94);
    backdrop-filter:blur(14px);
    -webkit-backdrop-filter:blur(14px);
    opacity:0;
    visibility:hidden;
    pointer-events:none;
    transition:opacity .35s ease,visibility .35s ease;
}

#lightbox.open{
    opacity:1;
    visibility:visible;
    pointer-events:auto;
}

#lightboxImage{
    max-width:min(92vw,1400px);
    max-height:88vh;
    width:auto;
    height:auto;
    object-fit:contain;
    border-radius:14px;
    box-shadow:0 30px 100px rgba(0,0,0,.75);
    transform:scale(.96);
    transition:transform .35s ease;
}

#lightbox.open #lightboxImage{
    transform:scale(1);
}

#closeLightbox{
    position:absolute;
    top:24px;
    right:30px;
    width:48px;
    height:48px;
    border:none;
    border-radius:50%;
    background:rgba(255,255,255,.08);
    border:1px solid rgba(255,255,255,.12);
    color:#fff;
    cursor:pointer;
    font-size:2rem;
    line-height:1;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:.3s ease;
}

#closeLightbox:hover{
    background:rgba(124,58,237,.5);
    transform:rotate(90deg);
}


/* =========================================================
   RESPONSIVE — TABLET
   ========================================================= */

@media (max-width:1100px){

    .section,
    .extras-section,
    .why-section,
    .contact-section,
    .about-section{
        padding-left:5vw;
        padding-right:5vw;
    }

    .navbar{
        padding-left:4vw;
        padding-right:4vw;
    }

    nav{
        gap:22px;
    }

    .service{
        grid-template-columns:70px minmax(220px,320px) minmax(0,1fr);
        gap:24px;
        padding:22px;
    }

    .service:nth-child(even){
        grid-template-columns:minmax(0,1fr) minmax(220px,320px) 70px;
    }

    .service-image{
        height:230px;
    }

    .about-section{
        gap:55px;
    }

    .why-grid{
        grid-template-columns:repeat(2,1fr);
    }

}


/* =========================================================
   RESPONSIVE — MOBILE
   ========================================================= */

@media (max-width:800px){

    body{
        line-height:1.55;
    }

    .section,
    .about-section,
    .why-section,
    .contact-section,
    .extras-section{
        padding-top:90px;
        padding-bottom:90px;
    }


    /* ---------- NAV ---------- */

    .navbar{
        height:76px;
        padding:0 20px;
    }

    .brand{
        gap:10px;
    }

    .brand img{
        width:38px;
        height:38px;
    }

    .brand strong{
        font-size:.8rem;
    }

    .brand small{
        font-size:.54rem;
        letter-spacing:2px;
    }

    .hamburger{
        display:flex;
    }

    nav{
        position:absolute;
        top:76px;
        left:15px;
        right:15px;
        padding:18px;
        display:flex;
        flex-direction:column;
        align-items:stretch;
        gap:4px;
        background:rgba(10,10,12,.96);
        border:1px solid rgba(255,255,255,.08);
        border-radius:22px;
        box-shadow:0 30px 80px rgba(0,0,0,.55);
        backdrop-filter:blur(22px);
        -webkit-backdrop-filter:blur(22px);

        opacity:0;
        visibility:hidden;
        pointer-events:none;
        transform:translateY(-10px);
        transition:.3s ease;
    }

    nav.active{
        opacity:1;
        visibility:visible;
        pointer-events:auto;
        transform:translateY(0);
    }

    nav a{
        width:100%;
        padding:14px 12px;
        border-radius:12px;
    }

    nav a::after{
        display:none;
    }

    nav a:hover{
        background:rgba(124,58,237,.08);
    }

    .nav-cta{
        text-align:center;
        margin-top:7px;
    }


    /* ---------- HERO ---------- */

    .hero{
        min-height:100svh;
    }

    .hero-image{
        object-position:center;
        transform:scale(1.04);
    }

    .hero-vignette{
        background:linear-gradient(
            90deg,
            rgba(5,5,5,.4),
            transparent 20%,
            transparent 80%,
            rgba(5,5,5,.4)
        );
    }

    .hero-content{
        padding:110px 20px 120px;
    }

    .hero-kicker{
        gap:10px;
        letter-spacing:2px;
        font-size:.62rem;
        margin-bottom:26px;
    }

    .hero-kicker span{
        width:22px;
    }

    .hero h1{
        font-size:clamp(3.2rem,15vw,5.5rem);
        letter-spacing:-3px;
        line-height:.9;
        margin-bottom:24px;
    }

    .hero p{
        font-size:.95rem;
        line-height:1.7;
        max-width:560px;
    }

    .hero-actions{
        margin-top:34px;
        flex-direction:column;
        align-items:stretch;
        gap:12px;
    }

    .button{
        width:100%;
        padding:16px 22px;
    }

    .hero-location{
        margin-top:35px;
        font-size:.58rem;
        letter-spacing:2px;
    }

    .hero-scroll{
        bottom:24px;
        font-size:.55rem;
        letter-spacing:2px;
    }

    .hero-scroll span{
        height:35px;
    }


    /* ---------- INTRO ---------- */

    .intro-strip{
        grid-template-columns:1fr;
    }

    .intro-strip div{
        padding:30px 24px;
        border-right:none;
        border-bottom:1px solid var(--line);
    }

    .intro-strip div:last-child{
        border-bottom:none;
    }

    .intro-strip p{
        font-size:1rem;
    }


    /* ---------- HEADINGS ---------- */

    .section-heading{
        flex-direction:column;
        align-items:flex-start;
        gap:25px;
        margin-bottom:45px;
    }

    .section-heading h2{
        font-size:clamp(2.5rem,12vw,4rem);
        letter-spacing:-2px;
    }

    .section-heading p{
        max-width:100%;
        font-size:.94rem;
    }


    /* ---------- SERVICES ---------- */

    .services-list{
        gap:18px;
    }

    .service,
    .service:nth-child(even){
        display:grid;
        grid-template-columns:1fr;
        gap:18px;
        padding:20px;
    }

    .service-number,
    .service:nth-child(even) .service-number,
    .service:nth-child(even) .service-image,
    .service:nth-child(even) .service-info{
        order:initial;
        text-align:left;
    }

    .service-number{
        font-size:.8rem;
        margin-bottom:-3px;
    }

    .service-image{
        height:220px;
        border-radius:18px;
    }

    .service-info h3{
        font-size:1.55rem;
        margin-bottom:10px;
    }

    .service-info p{
        font-size:.9rem;
        line-height:1.7;
        margin-bottom:18px;
    }

    .service-info span{
        font-size:.7rem;
    }


    /* ---------- EXTRAS ---------- */

    .extras-heading{
        margin-bottom:40px;
    }

    .extras-heading h2{
        font-size:clamp(2.5rem,11vw,4rem);
    }

    .extras{
        gap:10px;
    }

    .extras span{
        font-size:.72rem;
        padding:12px 16px;
    }


    /* ---------- GALLERY ---------- */

    .gallery{
        grid-template-columns:1fr 1fr;
        grid-auto-rows:auto;
        gap:10px;
    }

    .gallery-large,
    .gallery-wide,
    .gallery-item:not(.gallery-large):not(.gallery-wide){
        grid-column:span 1;
        grid-row:auto;
        aspect-ratio:1 / 1;
    }

    .gallery-large,
    .gallery-wide{
        grid-column:span 2;
        aspect-ratio:16 / 10;
    }

    .gallery-caption{
        padding:16px;
        font-size:.58rem;
        letter-spacing:2px;
    }

    .gallery-item::after{
        display:none;
    }


    /* ---------- ABOUT ---------- */

    .about-section{
        grid-template-columns:1fr;
        gap:50px;
    }

    .about-image::before{
        inset:18px -15px -15px 15px;
        border-radius:22px;
    }

    .about-image img{
        border-radius:22px;
    }

    .about-content h2{
        font-size:clamp(2.8rem,12vw,4.5rem);
        letter-spacing:-2px;
    }

    .about-content p{
        font-size:.94rem;
        line-height:1.8;
    }


    /* ---------- WHY ---------- */

    .why-intro{
        margin-bottom:45px;
    }

    .why-grid{
        grid-template-columns:1fr;
        gap:14px;
    }

    .why-card{
        padding:30px 24px;
    }


    /* ---------- FAQ ---------- */

    .faq-item button{
        padding:22px 0;
        font-size:.92rem;
        line-height:1.5;
    }

    .faq-item.active .answer{
        padding:0 20px 22px 0;
        font-size:.9rem;
    }


    /* ---------- CONTACT ---------- */

    .contact-section{
        grid-template-columns:1fr;
        gap:50px;
    }

    .contact-copy h2{
        font-size:clamp(2.8rem,12vw,4.6rem);
        letter-spacing:-2px;
    }

    .booking-form{
        grid-template-columns:1fr;
    }

    .form-full{
        grid-column:auto;
    }

    .form-submit{
        grid-column:auto;
    }


    /* ---------- INSTAGRAM ---------- */

    .instagram-section{
        padding-top:80px;
        padding-bottom:80px;
        align-items:flex-start;
    }

    .instagram-section h2{
        font-size:clamp(1.7rem,8vw,2.7rem);
    }

    .instagram-link{
        width:100%;
        text-align:center;
    }


    /* ---------- FOOTER ---------- */

    footer{
        padding:70px 20px 30px;
    }

    .footer-brand{
        gap:14px;
    }

    .footer-brand img{
        width:58px;
        height:58px;
    }

    .footer-brand strong{
        font-size:.82rem;
    }

    .footer-brand span{
        font-size:.58rem;
        letter-spacing:2px;
    }

    .footer-links{
        gap:20px;
        margin-bottom:40px;
    }

    .footer-bottom{
        flex-direction:column;
        font-size:.62rem;
        letter-spacing:1.5px;
    }


    /* ---------- LIGHTBOX ---------- */

    #lightbox{
        padding:20px;
    }

    #lightboxImage{
        max-width:94vw;
        max-height:82vh;
        border-radius:10px;
    }

    #closeLightbox{
        top:16px;
        right:16px;
        width:44px;
        height:44px;
        font-size:1.7rem;
    }

}


/* =========================================================
   EXTRA SMALL PHONES
   ========================================================= */

@media (max-width:420px){

    .navbar{
        padding:0 15px;
    }

    .hero-content{
        padding-left:15px;
        padding-right:15px;
    }

    .hero h1{
        font-size:clamp(3rem,15vw,4.5rem);
    }

    .section,
    .about-section,
    .why-section,
    .contact-section,
    .extras-section{
        padding-left:20px;
        padding-right:20px;
    }

    .service{
        padding:17px;
    }

    .service-image{
        height:200px;
    }

    .intro-strip div{
        padding:26px 20px;
    }

}


/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion:reduce){

    html{
        scroll-behavior:auto;
    }

    *,
    *::before,
    *::after{
        animation-duration:.01ms !important;
        animation-iteration-count:1 !important;
        transition-duration:.01ms !important;
    }
}
