let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const controls = document.getElementById('controls');
const pageIndicator = document.getElementById('current-page');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    
    // Відображення панелі керування (ховати на обкладинці)
    if(index === 0) {
        controls.style.display = 'none';
    } else {
        controls.style.display = 'flex';
        pageIndicator.textContent = index + 1; 
    }
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

// Керування з клавіатури
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowRight') {
        nextSlide();
    } else if (e.code === 'ArrowLeft') {
        prevSlide();
    }
});