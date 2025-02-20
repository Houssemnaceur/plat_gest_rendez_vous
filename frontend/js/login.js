document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Store the JWT token and redirect to a dashboard or another page
            localStorage.setItem('token', data.token);
            window.location.href = './dashboard.html'; // Adjust the path as needed
        } else {
            alert(data.error || 'Something went wrong!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login.');
    }
});
