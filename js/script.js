// Cambios de colores al inicio texto Kevin Bolaños
const text = document.querySelectorAll('.text_animations, .text_developer');

function createGradientAnimation() {
  text.forEach(element => {
    element.animate([
      { 
        background: '#2B64E0',
        backgroundClip: 'text',
        color: 'transparent'
      },
      { 
        background: '#ffffff',
        backgroundClip: 'text',
        color: 'transparent'
      },
      { 
        background: '#2B89E0',
        backgroundClip: 'text',
        color: 'transparent'
      },
      { 
        background: '#562B9E',
        backgroundClip: 'text',
        color: 'transparent'
      },
      { 
        background: '#2B64E0',
        backgroundClip: 'text',
        color: 'transparent'
      }
    ], {
      duration: 6000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });
  });
}
// Llamar la función para iniciar la animación
createGradientAnimation();

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.projects_container');
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    container.scrollBy({
      left: container.clientWidth,
      behavior: 'smooth'
    });
    scrollAmount += container.clientWidth;
    if (scrollAmount >= container.scrollWidth) {
      scrollAmount = 0;
      container.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  }, 3000); // Cambia de imagen cada 3 segundos
});


