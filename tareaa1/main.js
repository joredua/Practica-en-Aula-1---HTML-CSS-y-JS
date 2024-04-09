
let users = [];


function addUser(name, ap, email, contraseña) {
    users.push({ name, ap, email, contraseña });
}


function displayUsers() {
    const app = document.getElementById("app");
    app.innerHTML = ""; 
    
    users.forEach(user => {
        const container = document.createElement("div");
        container.classList.add("user-container");

        const nameElement = document.createElement("p");
        nameElement.textContent = `Nombre: ${user.name}`;

        const apElement = document.createElement("p");
        apElement.textContent = `Apellido: ${user.ap}`;

        const emailElement = document.createElement("p");
        emailElement.textContent = `Email: ${user.email}`;

        const contraseñaElement = document.createElement("p");
        contraseñaElement.textContent = `Contraseña: ${user.contraseña}`;

        container.appendChild(nameElement);
        container.appendChild(apElement);
        container.appendChild(emailElement);
        container.appendChild(contraseñaElement);

        app.appendChild(container);
    });
}


function solution(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const ap = document.getElementById("ap").value;
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;
    
    addUser(name, ap, email, contraseña);
    displayUsers();
}
