
async function register(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const data = await response.json();
        console.log(data);
       
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('registerBtn').addEventListener('click', register);