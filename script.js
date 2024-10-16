// ------------------------- POPUP PAR MOSTRAR LOS CERTIVICADOS EN VENTANA CENTRADA-----------------------------------

// Función para abrir ventanas emergentes centradas
function openPopup(url) {
    const popupWidth = 640;
    const popupHeight = 480;

    // Cálculo para centrar la ventana emergente
    const left = (window.innerWidth - popupWidth) / 2 + window.screenX;
    const top = (window.innerHeight - popupHeight) / 2 + window.screenY;

    // Abrir ventana emergente para la url clicleada centrada sin título
    window.open(
        url,
        '', // Título vacío para evitar que se muestre el nombre del archivo
        `width=${popupWidth},height=${popupHeight},top=${top},left=${left},scrollbars=yes,resizable=no`
    );
}

// Popup donde se despliega el certificado: Seleccionar todos los enlaces que tienen la clase 'popup-link'
const links = document.querySelectorAll('a.MiPopup');

// Menú Haburguesa: Asignar evento de click a cada enlace
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar la navegación estándar del enlace
        openPopup(this.href); // Abrir la ventana emergente centrada
    });
});

// Función para visualizar y ocultar barra de menú en pantallas pequeñas
function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
}