// script.js

// Selecciona los botones de navegación y el contenedor
const buttons = document.querySelectorAll('.nav_btn');
const viewContainer = document.getElementById('view_container');

// Función para cargar vistas
function loadView(view) {
  fetch(view)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar la vista: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => { 
      viewContainer.innerHTML = html; // Inserta el contenido de la vista en el contenedor
      if (view.includes('about.html')) {
        createGradientAnimation();
      }
    })
    .catch(error => {
      viewContainer.innerHTML = `<h1>Error</h1><p>No se pudo cargar la vista: ${error.message}</p>`;
    });
}

// Añade eventos a los botones
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const view = button.getAttribute('data-view'); // Obtiene el archivo HTML de la vista
    loadView(view); // Carga la vista
  });
});

// Desactivamos el load de la pagina y evita que vuelva al index, nos ayuda mientras se encuentra en desarrollo
const lastView = sessionStorage.getItem('currentView') || 'views/about.html';
// Seleccionamos la vista predeterminada
loadView(lastView);