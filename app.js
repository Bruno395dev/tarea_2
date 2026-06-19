const formulario = document.querySelector("form");
const inputNombre = document.querySelector("#nombre");
const inputEdad = document.querySelector("#edad");
const mensaje = document.querySelector("#mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = inputNombre.value;
    const edad = Number(inputEdad.value);

    if (edad >= 18) {
        mensaje.textContent = "✅ Bienvenido, " + nombre + ", tienes acceso al evento.";
        mensaje.classList.add("texto-verde");
        mensaje.classList.remove("texto-rojo");
    } else {
        mensaje.textContent = "❌ Lo sentimos, " + nombre + ", debes ser mayor de edad.";
        mensaje.classList.add("texto-rojo");
        mensaje.classList.remove("texto-verde");
    }
});
