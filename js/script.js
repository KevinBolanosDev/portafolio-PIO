/* function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const size = document.getElementById('size');
    size.textContent = `Ancho: ${width}px | Alto: ${height}px`;
} */

// Actualizar al cargar y al cambiar el tamaño
/* window.addEventListener('load', updateSize);
window.addEventListener('resize', updateSize); */

// Cambios de colores al texto Bienvenidos
const text = document.querySelector('.text_animations');

function createGradientAnimation() {
    text.style = 'font-size: 4rem; text-align: center;'
  const keyframes = [
    { 
      background: '#22223b',
      backgroundClip: 'text',
      color: 'transparent'
    },
    { 
      background: '#8d99ae',
      backgroundClip: 'text',
      color: 'transparent'
    },
    { 
      background: '#005f73',
      backgroundClip: 'text',
      color: 'transparent'
    },
    { 
      background: '#edf2f4',
      backgroundClip: 'text',
      color: 'transparent'
    },
    { 
      background: '#8d99ae',
      backgroundClip: 'text',
      color: 'transparent'
    },
  ];

  text.animate(keyframes, {
    duration: 6000,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease-in-out'
  });
}
// Llamar a la función para iniciar la animación
createGradientAnimation();

// Animación para el texto Desarrollador
function createTypingAnimation(element, text) {
    element.style.setProperty('', 'white'); // Set your desired color
    element.style.color = 'white';
    element.style.fontSize = '2rem';
    element.textContent = '';
    element.style.width = '0';
    element.style.borderRight = 'solid 4px white';
    
    let index = 0;
    
    function typeText() {
      if (index < text.length) {
        element.textContent += text[index];
        element.style.width = `${(index + -1)}ch`;
        index++;
        setTimeout(typeText, 80); // Adjust speed as needed
      } else {
        // Optional: add blinking effect
        setInterval(() => {
          element.style.borderRight = element.style.borderRight === 'none' 
            ? 'solid 4px white' 
            : 'none';
        }, 500);
      }
    }
    
    typeText();
  }
  
  // Usage example
  const titleElement = document.querySelector('.text_typing');
  createTypingAnimation(titleElement, 'Kevin Andres Bolaños Narvaez');


