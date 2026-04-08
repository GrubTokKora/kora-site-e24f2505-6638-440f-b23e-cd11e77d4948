gsap.registerPlugin(ScrollTrigger);

function initSharedUi() {
    const navbar = document.getElementById('navbar');
    if (navbar && !navbar.dataset.scrollBound) {
        navbar.dataset.scrollBound = 'true';
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('shadow-md');
            } else {
                navbar.classList.remove('shadow-md');
            }
        });
    }

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && closeMenuBtn && mobileMenu && !mobileMenu.dataset.menuBound) {
        mobileMenu.dataset.menuBound = 'true';
        mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.add('active'));
        closeMenuBtn.addEventListener('click', () => mobileMenu.classList.remove('active'));
    }
}

gsap.utils.toArray('.fade-in').forEach((element) => {
    gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
});

gsap.utils.toArray('.slide-left').forEach((element) => {
    gsap.to(element, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
});

gsap.utils.toArray('.slide-right').forEach((element) => {
    gsap.to(element, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
});

gsap.utils.toArray('.scale-in').forEach((element, index) => {
    gsap.to(element, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
});

if (document.querySelector('.hero-bg')) {
    gsap.to('.hero-bg', {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-bg',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
}

initSharedUi();
document.addEventListener('site:partials-loaded', initSharedUi);
