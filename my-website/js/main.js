// LEARNcraft Premium SaaS Landing Page JS
// Burger menu and mobile nav
const burger = document.querySelector('.burger');
const mobileMenu = document.getElementById('mobile-menu');
const body = document.body;

if (burger && mobileMenu) {
	burger.addEventListener('click', () => {
		body.classList.toggle('menu-open');
	});
	// Close menu when clicking outside
	document.addEventListener('click', (e) => {
		if (body.classList.contains('menu-open')) {
			if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
				body.classList.remove('menu-open');
			}
		}
	});
	// Close menu on link click
	mobileMenu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			body.classList.remove('menu-open');
		});
	});
}

// Animate feature cards on scroll (staggered)
const featureCards = document.querySelectorAll('.feature-card');
const revealFeatures = () => {
	featureCards.forEach((card, i) => {
		const rect = card.getBoundingClientRect();
		if (rect.top < window.innerHeight - 60) {
			card.style.opacity = '1';
			card.style.transform = 'translateY(0)';
		}
	});
};
window.addEventListener('scroll', revealFeatures);
window.addEventListener('DOMContentLoaded', revealFeatures);
