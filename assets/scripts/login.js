const form = document.getElementById("form")
const email = document.getElementById("email")
const pass = document.getElementById("password")

function login(e) {
    e.preventDefault()
    const logged = email.value === "correo@email.cl" && pass.value === "contraseña"

    if (logged) {
        sessionStorage.setItem("auth", true)
        location.href = "/index.html"
    } else {
        alert("Correo y/o contraseña incorrecta")
    }

}
form.addEventListener("submit", login)