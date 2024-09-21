document.addEventListener('DOMContentLoaded', function () {
    // Sign Up Form Submission
    document.getElementById('signUpForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('signUpUser').value;
        const password = document.getElementById('signUpPass').value;
        const confirmPassword = document.getElementById('signUpconfirmPass').value;
        const email = document.getElementById('signUpEmail').value;

        // Validations
        if (username.length < 3 || username.length > 20) {
            alert('Username must be between 3 and 20 characters long.');
            return;
        }

        // New username validation
        const usernamePattern = /^[A-Za-z ]+$/;

        if (!usernamePattern.test(username)) {
            alert('Username must contain only letters and spaces');
            return;
        }
        
    



        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const userData = {
            username: username,
            password: password,
            email: email
        };

        // Change local storage key to reflect interior design context
        localStorage.setItem('interiorDesignUser_' + username, JSON.stringify(userData));
        console.log('User signed up:', userData);
        alert('Signup successful! Data stored in local storage.');
    });

    // Sign In Form Submission
    document.getElementById('signInForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('signInUser').value;
        const password = document.getElementById('signInPass').value;

        // Change local storage key to reflect interior design context
        const storedUserData = localStorage.getItem('interiorDesignUser_' + username);
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            if (userData.password === password) {
                console.log('Login successful for username:', username);
                alert('Login successful!');
            } else {
                console.log('Incorrect password for user:', username);
                alert('Incorrect password!');
            }
        } else {
            console.log('No user found with username:', username);
            alert('No user found with this username!');
        }
    });

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
