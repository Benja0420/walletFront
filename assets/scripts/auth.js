const logged = sessionStorage.getItem("auth")
console.log(logged)
if (!logged)
    location.href = "/pages/login.html"