const button = document.getElementById("button");

const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");

button.addEventListener("click", (e) =>{
    if(user.value == "" || email.value == "" || password.value == ""){
        alert("Por favor ingresa los datos en los campos correspondientes");
    }
    else{
        e.preventDefault()
        alert("Felicidades te acabas de registrar correctamente");
    }
})