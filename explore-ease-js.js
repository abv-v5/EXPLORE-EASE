// script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Carousel Functionality
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    function showSlide(index) {
        carouselSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            indicators[i].classList.remove('active');
        });
        carouselSlides[index].classList.add('active');
        indicators[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Modal Functionality (Sign In / Sign Up)
    const signInBtn = document.getElementById('sign-in-btn');
    const signUpBtn = document.getElementById('sign-up-btn');
    const signInModal = document.getElementById('sign-in-modal');
    const signUpModal = document.getElementById('sign-up-modal');
    const closeBtns = document.querySelectorAll('.close-btn');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToSignin = document.getElementById('switch-to-signin');

    signInBtn.addEventListener('click', () => signInModal.classList.add('active'));
    signUpBtn.addEventListener('click', () => signUpModal.classList.add('active'));

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            signInModal.classList.remove('active');
            signUpModal.classList.remove('active');
        });
    });

    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        signInModal.classList.remove('active');
        signUpModal.classList.add('active');
    });

    switchToSignin.addEventListener('click', (e) => {
        e.preventDefault();
        signUpModal.classList.remove('active');
        signInModal.classList.add('active');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === signInModal || e.target === signUpModal) {
            signInModal.classList.remove('active');
            signUpModal.classList.remove('active');
        }
    });

    // Form Submission for Itinerary Planner (Simulated AI Response)
    const generateBtn = document.querySelector('.generate-btn');
    const destinationSelect = document.getElementById('destination');
    const durationInput = document.getElementById('duration');
    const styleCheckboxes = document.querySelectorAll('input[name="style"]');

    generateBtn.addEventListener('click', () => {
        const destination = destinationSelect.value;
        const duration = durationInput.value;
        const styles = Array.from(styleCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.id);

        if (destination && duration) {
            // Simulated AI response (alert for now, can be replaced with a modal or dynamic content)
            let itinerary = `**Itinerary for ${destination} (${duration} days)**\n`;
            if (styles.length > 0) {
                itinerary += `Travel Style: ${styles.join(', ')}\n`;
            }
            itinerary += `Day 1: Arrive and explore local markets\n`;
            itinerary += `Day 2: Visit a key attraction (e.g., ${destination === 'delhi' ? 'Red Fort' : destination === 'jaipur' ? 'Amber Fort' : 'Beach'})\n`;
            itinerary += `Day ${duration}: Departure\n`;

            alert(itinerary); // Replace with a modal or DOM manipulation for better UX
        } else {
            alert('Please select a destination and duration!');
        }
    });

    // Search Bar Functionality (Basic Placeholder)
    const searchInputs = document.querySelectorAll('.search-option input');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', () => {
        const where = searchInputs[0].value;
        const checkIn = searchInputs[1].value;
        const checkOut = searchInputs[2].value;
        const who = searchInputs[3].value;

        if (where) {
            alert(`Searching for: ${where}, Check-in: ${checkIn}, Check-out: ${checkOut}, Guests: ${who}`);
            // Add logic to filter destinations or redirect to a results page
        } else {
            alert('Please enter a destination!');
        }
    });

    // Favorite Button Functionality
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const icon = btn.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                alert('Added to favorites!');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                alert('Removed from favorites!');
            }
        });
    });

    // Form Validation for Sign In/Sign Up
    const signInForm = document.querySelector('#sign-in-modal .auth-form');
    const signUpForm = document.querySelector('#sign-up-modal .auth-form');

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;
        if (email && password) {
            alert('Sign In successful!'); // Replace with actual authentication logic
            signInModal.classList.remove('active');
        } else {
            alert('Please fill all fields!');
        }
    });
    // explore-ease-js.js
    // Toggle dropdown on user menu click
    document.getElementById('user-menu').addEventListener('click', function (event) {
        const dropdown = document.getElementById('dropdown-menu');
        dropdown.classList.toggle('active');
        event.stopPropagation();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        const userMenu = document.getElementById('user-menu');
        const dropdown = document.getElementById('dropdown-menu');
        if (!userMenu.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        const terms = document.getElementById('accept-terms').checked;

        if (name && email && password && confirmPassword && terms) {
            if (password === confirmPassword) {
                alert('Account created successfully!'); // Replace with actual registration logic
                signUpModal.classList.remove('active');
            } else {
                alert('Passwords do not match!');
            }
        } else {
            alert('Please fill all fields and accept the terms!');
        }
    });
});