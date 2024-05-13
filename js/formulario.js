document.getElementById("contactForm").addEventListener("submit", function (event) {
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let asunto = document.getElementById("asunto").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    let error = false;

    // Validación del campo de nombre
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        document.getElementById("nombreError").textContent = "Por favor, ingrese solo letras en el campo de nombre.";
        error = true;
    } else {
        document.getElementById("nombreError").textContent = "";
    }

    // Validación del campo de correo electrónico
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        document.getElementById("emailError").textContent = "Por favor, ingrese un correo electrónico válido en el formato adecuado.";
        error = true;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Validación del campo de asunto
    if (!/^[a-zA-Z0-9\s]+$/.test(asunto)) {
        document.getElementById("asuntoError").textContent = "Por favor, ingrese solo caracteres alfanuméricos en el campo de asunto.";
        error = true;
    } else {
        document.getElementById("asuntoError").textContent = "";
    }

    // Evitar el envío del formulario si hay errores
    if (error) {
        event.preventDefault();
    }
});