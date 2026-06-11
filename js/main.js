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

const REVEAL_SELECTOR = '.fade-in, .slide-left, .slide-right, .scale-in';
const REVEAL_VIEWPORT_RATIO = 0.85;

function revealElement(element) {
    if (element.classList.contains('is-visible')) return;
    element.classList.add('is-visible');
}

function getScaleInDelay(element) {
    const parent = element.parentElement;
    if (!parent) return 0;
    const siblings = parent.querySelectorAll(':scope > .scale-in');
    const index = Array.from(siblings).indexOf(element);
    return index > 0 ? index * 100 : 0;
}

function initScrollAnimations() {
    const elements = document.querySelectorAll(REVEAL_SELECTOR);
    if (!elements.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        elements.forEach(revealElement);
        return;
    }

    const viewportThreshold = window.innerHeight * REVEAL_VIEWPORT_RATIO;
    const pending = [];

    elements.forEach((element) => {
        if (element.closest('.hero-bg')) {
            return;
        }

        const delay = element.classList.contains('scale-in') ? getScaleInDelay(element) : 0;
        const rect = element.getBoundingClientRect();

        if (rect.top < viewportThreshold && rect.bottom > 0) {
            if (delay) {
                element.style.animationDelay = `${delay}ms`;
            }
            revealElement(element);
            return;
        }

        if (delay) {
            element.style.animationDelay = `${delay}ms`;
        }
        pending.push(element);
    });

    if (!pending.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    revealElement(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { root: null, rootMargin: '0px 0px -15% 0px', threshold: 0 }
    );

    pending.forEach((element) => observer.observe(element));
}

function initHeroParallax() {
    const hero = document.querySelector('.hero-bg');
    const img = document.querySelector('.hero-bg-img');
    if (!hero || !img || hero.dataset.parallaxBound) return;

    hero.dataset.parallaxBound = 'true';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    function updateParallax() {
        const rect = hero.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const progress = Math.max(0, -rect.top / rect.height);
        img.style.transform = `translateY(${progress * 15}%)`;
    }

    window.addEventListener('scroll', updateParallax, { passive: true });
    updateParallax();
}

function initFaqAccordion() {
    const accordion = document.getElementById('faq-accordion');
    if (!accordion || accordion.dataset.bound) return;

    accordion.dataset.bound = 'true';
    const items = Array.from(accordion.querySelectorAll('.faq-accordion__item'));

    function closeItem(item) {
        const trigger = item.querySelector('.faq-accordion__trigger');
        const panel = item.querySelector('.faq-accordion__panel');
        if (!trigger || !panel) return;

        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
    }

    function openItem(item) {
        const trigger = item.querySelector('.faq-accordion__trigger');
        const panel = item.querySelector('.faq-accordion__panel');
        if (!trigger || !panel) return;

        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
    }

    items.forEach((item) => {
        const trigger = item.querySelector('.faq-accordion__trigger');
        if (!trigger) return;

        trigger.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            items.forEach(closeItem);

            if (!isOpen) {
                openItem(item);
            }
        });
    });
}

function initPageAnimations() {
    initScrollAnimations();
    initHeroParallax();
}

function onDocumentReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}

onDocumentReady(() => {
    initSharedUi();
    initPageAnimations();
    initSuggestedSearchesModal();
    initFaqAccordion();
});

document.addEventListener('site:partials-loaded', initSharedUi);
document.addEventListener('site:partials-loaded', initPageAnimations);
