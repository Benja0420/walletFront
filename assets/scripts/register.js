/* export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const [result] = await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
        res.status(201).json({ id: result.insertId, name, email, password });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
} */



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