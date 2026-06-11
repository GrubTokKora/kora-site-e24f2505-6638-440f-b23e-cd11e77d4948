const ICON_MENU = '<svg class="icon icon-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>';
const ICON_CLOSE = '<svg class="icon icon-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>';
const ICON_FACEBOOK = '<svg class="icon icon-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>';
const ICON_INSTAGRAM = '<svg class="icon icon-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>';
const ICON_LINKEDIN = '<svg class="icon icon-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';

const HEADER_HTML = `
<nav id="navbar" class="fixed w-full z-50 transition-all duration-500 bg-white border-b border-black/5" aria-label="Main navigation">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-24">
            <a href="index.html" class="flex items-center space-x-3 group">
                <img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/e24f2505-6638-440f-b23e-cd11e77d4948/de8c94d8-887e-4625-825f-ec262dbc28df/1775656767_w84dqn.jpeg" alt="Connie Stetler Real Estate" class="h-12 w-auto transition-transform duration-300 group-hover:scale-105" width="160" height="48" loading="eager" decoding="async">
            </a>

            <div class="hidden lg:flex items-center space-x-10">
                <a href="index.html" data-nav="home" class="nav-link text-dark font-josefin text-base uppercase hover:text-primary transition-colors">Home</a>
                <a href="about.html" data-nav="about" class="nav-link text-dark font-josefin text-base uppercase hover:text-primary transition-colors">About</a>
                <a href="buy.html" data-nav="buy" class="nav-link text-dark font-josefin text-base uppercase hover:text-primary transition-colors">Buy</a>
                <a href="sell.html" data-nav="sell" class="nav-link text-dark font-josefin text-base uppercase hover:text-primary transition-colors">Sell</a>
                <a href="contact.html" data-nav="contact" class="nav-link text-dark font-josefin text-base uppercase hover:text-primary transition-colors">Contact</a>
                <a href="https://www.raveis.com/contact/homevaluationwizard?SITE=agt&AGT=9216&" target="_blank" data-nav="appt" class="btn-primary text-white px-6 py-3 font-josefin text-xs">Home Evaluation</a>
            </div>

            <button id="mobile-menu-btn" class="lg:hidden text-dark hover:text-primary transition-colors" aria-label="Open menu" type="button">
                ${ICON_MENU}
            </button>
        </div>
    </div>

    <div id="mobile-menu" class="mobile-menu fixed top-0 right-0 w-80 h-full bg-white z-50 lg:hidden">
        <div class="p-6">
            <button id="close-menu-btn" class="absolute top-6 right-6 text-dark hover:text-primary" aria-label="Close menu" type="button">
                ${ICON_CLOSE}
            </button>
            <div class="mt-16 space-y-6">
                <a href="index.html" data-nav="home" class="block text-dark font-josefin text-lg hover:text-primary transition-colors">Home</a>
                <a href="about.html" data-nav="about" class="block text-dark font-josefin text-lg hover:text-primary transition-colors">About</a>
                <a href="buy.html" data-nav="buy" class="block text-dark font-josefin text-lg hover:text-primary transition-colors">Buy</a>
                <a href="sell.html" data-nav="sell" class="block text-dark font-josefin text-lg hover:text-primary transition-colors">Sell</a>
                <a href="contact.html" data-nav="contact" class="block text-dark font-josefin text-lg hover:text-primary transition-colors">Contact</a>
                <a href="https://www.raveis.com/contact/homevaluationwizard?SITE=agt&AGT=9216&" target="_blank" data-nav="appt" class="block btn-primary text-white px-6 py-3 font-josefin text-center mt-8 text-xs">Home Evaluation</a>
            </div>
        </div>
    </div>
</nav>
`;

const FOOTER_HTML = `
<div class="bg-white text-dark pt-16 border-t border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
                <img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/e24f2505-6638-440f-b23e-cd11e77d4948/de8c94d8-887e-4625-825f-ec262dbc28df/1775656767_w84dqn.jpeg" alt="Connie Stetler" class="h-16 mb-6" width="200" height="64" loading="lazy" decoding="async">
                <p class="text-gray-text font-poppins text-sm leading-relaxed mb-6">
                    Over 30 years of experience helping families find their dream homes in Westchester, Putnam, and Fairfield Counties.
                </p>
                <div class="flex space-x-3">
                    <a href="https://www.facebook.com/ConnieStetler.Realestate.Newyork/" target="_blank" rel="noopener noreferrer" class="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                        ${ICON_FACEBOOK}
                    </a>
                    <a href="https://www.instagram.com/conniestetler_realestate/" target="_blank" rel="noopener noreferrer" class="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                        ${ICON_INSTAGRAM}
                    </a>
                    <a href="https://www.linkedin.com/in/conniestetlerrealtor/" target="_blank" rel="noopener noreferrer" class="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn">
                        ${ICON_LINKEDIN}
                    </a>
                </div>
            </div>

            <div>
                <h2 class="font-josefin font-semibold text-lg mb-6">Quick Links</h2>
                <ul class="space-y-3">
                    <li><a href="index.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Home</a></li>
                    <li><a href="about.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">About</a></li>
                    <li><a href="buy.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Buy a Home</a></li>
                    <li><a href="sell.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Sell Your Home</a></li>
                    <li><a href="contact.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Contact</a></li>
                </ul>
            </div>

            <div>
                <h2 class="font-josefin font-semibold text-lg mb-6">Services</h2>
                <ul class="space-y-3">
                    <li><a href="buy.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Buyer Representation</a></li>
                    <li><a href="sell.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Seller Representation</a></li>
                    <li><a href="https://www.raveis.com/contact/homevaluationwizard?SITE=agt&AGT=9216&" target="_blank" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Home Valuation</a></li>
                </ul>
            </div>

            <div>
                <h2 class="font-josefin font-semibold text-lg mb-6">Contact</h2>
                <ul class="space-y-3">
                    <li class="text-gray-text font-poppins text-sm">914.980.2402</li>
                    <li class="text-gray-text font-poppins text-sm">ConnieStetler@Raveis.com</li>
                    <li class="text-gray-text font-poppins text-sm">78 Purchase Street</li>
                    <li class="text-gray-text font-poppins text-sm">Rye, New York 10580</li>
                    <li class="text-gray-text font-poppins text-sm">Lic. #10301219833</li>
                </ul>
            </div>
        </div>

        <div class="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p class="text-gray-text/80 font-poppins text-sm">
                &copy; 2024 Connie Stetler Real Estate. All rights reserved.
            </p>
            <div class="flex items-center space-x-4">
                <img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/e24f2505-6638-440f-b23e-cd11e77d4948/de8c94d8-887e-4625-825f-ec262dbc28df/1775656651_hx55ta.jpeg" alt="Equal Housing Opportunity" class="h-10" width="40" height="40" loading="lazy" decoding="async">
            </div>
        </div>
    </div>
</div>
`;

function applyActiveNav(page) {
    if (!page) return;

    const navLinks = document.querySelectorAll(`#site-header [data-nav="${page}"]`);
    navLinks.forEach((link) => {
        link.classList.remove('text-dark', 'hover:text-primary');
        link.classList.add('text-primary');
    });
}

function renderPartials() {
    const headerMount = document.getElementById('site-header');
    const footerMount = document.getElementById('site-footer');

    if (!headerMount && !footerMount) return;

    if (headerMount) {
        headerMount.innerHTML = HEADER_HTML;
        applyActiveNav(document.body.dataset.page || '');
    }

    if (footerMount) {
        footerMount.innerHTML = FOOTER_HTML;
    }

    document.dispatchEvent(new CustomEvent('site:partials-loaded'));
}

document.addEventListener('DOMContentLoaded', () => {
    renderPartials();
});
