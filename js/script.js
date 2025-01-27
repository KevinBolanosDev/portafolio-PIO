// Cambios de colores al inicio texto Kevin Bolaños
const text = document.querySelectorAll('.text_animations, .text_developer');

function createGradientAnimation() {
  text.forEach(element => {
    if (element.classList.contains('text_developer')) {
      element.style.fontSize = '2rem';
    } else
    element.style.fontSize = '3rem';
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


