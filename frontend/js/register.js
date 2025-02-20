document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
    });

    const data = await response.json();

    if (response.ok) {
        alert("Inscription réussie !");
        window.location.href = "login.html"; // Rediriger vers la page de connexion
    } else {
        alert(data.message || "Erreur lors de l'inscription.");
    }
});
