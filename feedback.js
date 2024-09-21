const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', () => {
        let rating = star.getAttribute('data-value');
        document.getElementById('starRating').value = rating;
        stars.forEach(s => {
            s.classList.remove('selected');
        });
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }
    });
});

document.getElementById('feedbackForm').onsubmit = function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();
    const rating = document.getElementById('starRating').value;

    // Validation
    let errors = [];

    // Name validation
    if (name === "") {
        errors.push("Name is required.");
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        errors.push("Name can only contain alphabets and spaces.");
    }

    // Email validation
    if (email === "") {
        errors.push("Email is required.");
    } else if (!validateEmail(email)) {
        errors.push("Please enter a valid email address.");
    }

    // Comments validation
    if (comments === "") {
        errors.push("Comments are required.");
    }

    // Rating validation
    if (rating === "") {
        errors.push("Please select a star rating.");
    }

    // Display errors or submit form
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        const feedbackData = {
            name: name,
            email: email,
            comments: comments,
            rating: rating,
        };

        // Save feedback data to localStorage
        localStorage.setItem('feedbackData', JSON.stringify(feedbackData));

        // Show the custom alert
        showCustomAlert('Feedback submitted! Thank you!');

        // Reset form
        this.reset();
        stars.forEach(s => s.classList.remove('selected'));
    }
};

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Custom alert function
function showCustomAlert(message) {
    const alertBox = document.getElementById('customAlert');
    alertBox.querySelector('.message').textContent = message;
    alertBox.style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
}

