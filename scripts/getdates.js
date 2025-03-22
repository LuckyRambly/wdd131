
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

