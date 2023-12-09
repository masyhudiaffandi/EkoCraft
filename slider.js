let isDragging = false;
let startPosition = 0;
let currentIndex = 0;

const slider = document.getElementById('slider');
const sliderWrapper = document.getElementById('slider-wrapper');

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.clientX;
});

slider.addEventListener('mouseup', () => {
    isDragging = false;
    startPosition = 0;
});

slider.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const distance = e.clientX - startPosition;
        sliderWrapper.style.transform = `translateX(${distance}px)`;
    }
});

slider.addEventListener('mouseleave', () => {
    if (isDragging) {
        isDragging = false;
        startPosition = 0;
    }
});

slider.addEventListener('transitionend', () => {
    if (isDragging) {
        currentIndex += Math.sign(startPosition);
        updateSlider();
    }
});

function updateSlider() {
    const cardWidth = document.querySelector('.card').offsetWidth;
    const translateValue = -currentIndex * cardWidth;
    sliderWrapper.style.transform = `translateX(${translateValue}px)`;
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}