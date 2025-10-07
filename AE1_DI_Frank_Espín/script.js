function mostrarSeccion(seccionId) {
    // Ocultamos todas las secciones
    const secciones = document.querySelectorAll('.contenido');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });

    // Mostramos la sección seleccionada
    const seccionMostrar = document.getElementById(seccionId);
    if (seccionMostrar) {
        seccionMostrar.style.display = 'block';
    }
}

// Establecemos la sección de "principal" como visible por defecto
document.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('principal');
});
