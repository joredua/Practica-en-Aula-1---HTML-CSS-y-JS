function sendForm(event) {
  event.preventDefault();
  console.log(event);
  const name = event.target.name.value;
  const ap = event.target.ap.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const password2 = event.target.password2.value;
  // recupere los datos faltantes

  const app = document.getElementById("app");
  if (password !== password2) {
    const error = document.createElement("p");
    error.textContent = "Las contraseñas no coinciden";
    app.appendChild(error);
    return;
  }

  const user = [
    {
      label: "Nombre",
      value: name,
    },
    {
      label: "Apellido",
      value: ap,
    },
    {
      label: "Email",
      value: email,
    },
    {
      label: "password",
      value: password,
    },
    {
      label: "password2",
      value: password2,
    
    },
    // complete el objeto
  ];

  const title = document.createElement("h1");
  title.innerHTML = `<h1 class="text-2xl title">
    Datos del usuario
  </h1>`;
  app.appendChild(title);
  app.style.height = "auto";

  user.forEach((item) => {
    const container = document.createElement("div"); // dentro de las comillas complete la etiqueta a crear
    container.innerHTML = `
            <div
                class="container__item"  
            > 
                <span
                    class="item__label"
                >${item.label}</span>
                <span
                    class="item__value"
                >${item.value}</span>
            </div>`;
    app.appendChild(container);
  });
}