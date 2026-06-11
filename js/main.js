gsap.registerPlugin(ScrollTrigger);

function initSuggestedSearchesModal() {
    const fab = document.getElementById('suggested-searches-fab');
    const modal = document.getElementById('suggested-searches-modal');
    if (!fab || !modal || modal.dataset.bound) return;

    modal.dataset.bound = 'true';
    const closeTriggers = modal.querySelectorAll('[data-close-modal]');
    const fairHousingBtn = modal.querySelector('[data-fair-housing-notice]');
    let lastFocusedElement = null;

    function openModal() {
        lastFocusedElement = document.activeElement;
        modal.hidden = false;
        modal.setAttribute('aria-hidden', 'false');
        fab.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        const closeBtn = modal.querySelector('.suggested-searches-modal__close');
        if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
        modal.hidden = true;
        modal.setAttribute('aria-hidden', 'true');
        fab.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
        }
    }

    fab.addEventListener('click', openModal);

    closeTriggers.forEach((trigger) => {
        trigger.addEventListener('click', closeModal);
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal.querySelector('.suggested-searches-modal__backdrop')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (!modal.hidden && event.key === 'Escape') {
            closeModal();
        }
    });

    if (fairHousingBtn) {
        fairHousingBtn.addEventListener('click', (event) => {
            event.preventDefault();
        });
    }
}

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

if (document.querySelector('.hero-bg-img')) {
    gsap.to('.hero-bg-img', {
        y: '15%',
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
initSuggestedSearchesModal();
document.addEventListener('site:partials-loaded', initSharedUi);
document.addEventListener('DOMContentLoaded', initSuggestedSearchesModal);
