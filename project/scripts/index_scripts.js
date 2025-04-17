
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.nav-mobile');

    if (hamburgerMenu && mobileNav) {
        hamburgerMenu.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const subscriptionForm = document.getElementById('subscriptionForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('formMessage');

    let subscribers = [];

    function saveSubscribers() {
        localStorage.setItem('samAndMaxSubscribers', JSON.stringify(subscribers));
    }

    function loadSubscribers() {
        const storedSubscribers = localStorage.getItem('samAndMaxSubscribers');
        if (storedSubscribers) {
            subscribers = JSON.parse(storedSubscribers);
            console.log('Loaded subs:', subscribers);
        }
    }

    loadSubscribers();

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    subscriptionForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (name && email && isValidEmail(email)) {
            const newSubscriber = { name: name, email: email };
            subscribers.push(newSubscriber);
            saveSubscribers();
            formMessage.textContent = `Thanks, ${name}! You have successfully subscribed ${email}.`;
            formMessage.className = 'success';
            nameInput.value = '';
            emailInput.value = '';
            setTimeout(() => {
                formMessage.className = 'hidden';
                formMessage.textContent = '';
            }, 3000);
        } else {
            formMessage.textContent = 'Please, insert a valid name / email.';
            formMessage.className = 'error';
        }
    });

    function displayTotalSubscribers() {
        console.log(`Total subs number: ${subscribers.length}`);
    }

    displayTotalSubscribers();
});