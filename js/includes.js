const HEADER_HTML = `
<nav id="navbar" class="fixed w-full z-50 transition-all duration-500 bg-white border-b border-black/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-24">
            <a href="index.html" class="flex items-center space-x-3 group">
                <img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/e24f2505-6638-440f-b23e-cd11e77d4948/de8c94d8-887e-4625-825f-ec262dbc28df/1775656767_w84dqn.jpeg" alt="Connie Stetler Real Estate" class="h-12 w-auto transition-transform duration-300 group-hover:scale-105">
            </a>

            <div class="hidden lg:flex items-center space-x-10">
                <a href="index.html" data-nav="home" class="nav-link text-dark font-josefin text-base uppercase hover:text-primary transition-colors">Home</a>
                <a href="about.html" data-nav="about" class="nav-link text-dark font-josefin text-base uppercase hover:text-primary transition-colors">About</a>
                <a href="buy.html" data-nav="buy" class="nav-link text-dark font-josefin text-base uppercase hover:text-primary transition-colors">Buy</a>
                <a href="sell.html" data-nav="sell" class="nav-link text-dark font-josefin text-base uppercase hover:text-primary transition-colors">Sell</a>
                <a href="contact.html" data-nav="contact" class="nav-link text-dark font-josefin text-base uppercase hover:text-primary transition-colors">Contact</a>
                <a href="https://www.raveis.com/contact/homevaluationwizard?SITE=agt&AGT=9216&" target="_blank" data-nav="appt" class="btn-primary text-white px-6 py-3 font-josefin text-xs">Home Evaluation</a>
            </div>

            <button id="mobile-menu-btn" class="lg:hidden text-dark hover:text-primary transition-colors" aria-label="Open menu">
                <i class="fas fa-bars text-2xl"></i>
            </button>
        </div>
    </div>

    <div id="mobile-menu" class="mobile-menu fixed top-0 right-0 w-80 h-full bg-white z-50 lg:hidden">
        <div class="p-6">
            <button id="close-menu-btn" class="absolute top-6 right-6 text-dark hover:text-primary" aria-label="Close menu">
                <i class="fas fa-times text-2xl"></i>
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
<footer class="bg-white text-dark py-16 border-t border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
                <img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/e24f2505-6638-440f-b23e-cd11e77d4948/de8c94d8-887e-4625-825f-ec262dbc28df/1775656767_w84dqn.jpeg" alt="Connie Stetler" class="h-16 mb-6">
                <p class="text-gray-text font-poppins text-sm leading-relaxed mb-6">
                    Over 30 years of experience helping families find their dream homes in Westchester, Putnam, and Fairfield Counties.
                </p>
                <div class="flex space-x-3">
                    <a href="https://www.facebook.com/ConnieStetler.Realestate.Newyork/" target="_blank" rel="noopener noreferrer" class="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <i class="fab fa-facebook-f text-sm"></i>
                    </a>
                    <a href="https://www.instagram.com/conniestetler_realestate/" target="_blank" rel="noopener noreferrer" class="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <i class="fab fa-instagram text-sm"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/conniestetlerrealtor/" target="_blank" rel="noopener noreferrer" class="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <i class="fab fa-linkedin-in text-sm"></i>
                    </a>
                </div>
            </div>

            <div>
                <h4 class="font-josefin font-semibold text-lg mb-6">Quick Links</h4>
                <ul class="space-y-3">
                    <li><a href="index.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Home</a></li>
                    <li><a href="about.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">About</a></li>
                    <li><a href="buy.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Buy a Home</a></li>
                    <li><a href="sell.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Sell Your Home</a></li>
                    <li><a href="contact.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4 class="font-josefin font-semibold text-lg mb-6">Services</h4>
                <ul class="space-y-3">
                    <li><a href="buy.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Buyer Representation</a></li>
                    <li><a href="sell.html" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Seller Representation</a></li>
                    <li><a href="https://www.raveis.com/contact/homevaluationwizard?SITE=agt&AGT=9216&" target="_blank" class="text-gray-text hover:text-primary transition-colors font-poppins text-sm">Home Valuation</a></li>
                </ul>
            </div>

            <div>
                <h4 class="font-josefin font-semibold text-lg mb-6">Contact</h4>
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
                <img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/e24f2505-6638-440f-b23e-cd11e77d4948/de8c94d8-887e-4625-825f-ec262dbc28df/1775656651_hx55ta.jpeg" alt="Equal Housing Opportunity" class="h-10">
            </div>
        </div>
    </div>
</footer>
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

    if (window.tailwind && typeof window.tailwind.refresh === 'function') {
        window.tailwind.refresh();
    }

    document.dispatchEvent(new CustomEvent('site:partials-loaded'));
}

document.addEventListener('DOMContentLoaded', () => {
    renderPartials();
});
