// ------------------------- POPUP CON VENTANA CENTRADA -----------------------------------

// Función para abrir ventanas emergentes centradas
function openPopup(url) {
    const popupWidth = 640;
    const popupHeight = 480;

    // Cálculo para centrar la ventana emergente
    const left = (window.innerWidth - popupWidth) / 2 + window.screenX;
    const top = (window.innerHeight - popupHeight) / 2 + window.screenY;

    // Abrir la ventana emergente centrada sin título
    window.open(
        url,
        '', // Título vacío para evitar que se muestre el nombre del archivo
        `width=${popupWidth},height=${popupHeight},top=${top},left=${left},scrollbars=yes,resizable=no`
    );
}

// Seleccionar todos los enlaces que tienen la clase 'popup-link'
const links = document.querySelectorAll('a.MiPopup');

// Asignar evento de click a cada enlace
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la navegación estándar del enlace
        openPopup(this.href); // Abrir la ventana emergente centrada
    });
});