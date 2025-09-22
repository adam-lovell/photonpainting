// Smooth scroll to team section when CTA button is clicked
document.addEventListener('DOMContentLoaded', function() {
	// Get the CTA button and team section
	const ctaBtn = document.querySelector('.cta-btn');
	const teamSection = document.querySelector('.team-section');
	if (ctaBtn && teamSection) {
		ctaBtn.addEventListener('click', function(e) {
			e.preventDefault();
			teamSection.scrollIntoView({ behavior: 'smooth' });
		});
	}

	// Add a highlight effect to team cards on mouseover
	const teamCards = document.querySelectorAll('.team-card');
	teamCards.forEach(card => {
		card.addEventListener('mouseenter', function() {
			card.classList.add('active');
		});
		card.addEventListener('mouseleave', function() {
			card.classList.remove('active');
		});
	});
});
