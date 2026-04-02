document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // 1. Cambiar entre modo claro y oscuro
    themeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        
        // Cambiar el texto del botón según el modo
        if (body.classList.contains("dark-mode")) {
            themeBtn.textContent = "Modo Claro";
        } else {
            themeBtn.textContent = "Modo Oscuro";
        }
    });

    // 2. Efecto al hacer clic en la foto (el gatito)
    const photo = document.querySelector(".profile-photo");
    photo.addEventListener("click", () => {
        alert("¡Hola! Soy Luis Alejandro, futuro Ingeniero de Software.");
    });

    // 3. Log de consola profesional
    console.log("Hoja de Vida de Luis Alejandro cargada correctamente.");
});
