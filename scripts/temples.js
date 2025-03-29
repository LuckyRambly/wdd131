
function actualizarFechaModificacion() {
    const ahora = new Date();
    const fechaHoraFormateada = ahora.toLocaleString();

    document.getElementById("lastModified").textContent = "Last Modified: " + fechaHoraFormateada;
}
actualizarFechaModificacion();

function mostrarAñoActual() {
    const ahora = new Date();
    const anioActual = ahora.getFullYear();

    document.getElementById("currentyear").textContent = anioActual;
}
mostrarAñoActual();

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;
  
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('open');
      body.classList.toggle('nav-open');
    });
});