
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
    const productSelect = document.getElementById('productName');
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name; 
        option.textContent = product.name; 
        productSelect.appendChild(option);
    });

    const productValueSelect = document.getElementById('productName');
    productValueSelect.addEventListener('change', function() {
        const selectedProductId = products.find(p => p.name === this.value)?.id;
        console.log('ID del producto seleccionado:', selectedProductId);
    });
});