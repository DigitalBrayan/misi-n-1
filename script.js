let currentIndex = 0;
//todos los elementos
const items = document.querySelectorAll('.carrusel-item');
const totalItems = items.length;

// Mueve el carrusel segun el orden 1,2,3
function moveSlide(direction) {
    currentIndex += direction; //1 +
    
    // Resetea 
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }
    
    // Mueve el carrusel
    document.querySelector('.carrusel').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Inicializa el carrusel al cargar
document.addEventListener('DOMContentLoaded', () => {
    // Asigna los eventos a los botones
    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
    
    // Mueve automáticamente el carrusel
    setInterval(() => moveSlide(1), 10000);
    
    // Muestra el primer item
    moveSlide(0);
});
