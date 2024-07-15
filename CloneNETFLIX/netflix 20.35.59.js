const sliders = document.querySelectorAll('.slider-container');

sliders.forEach(sliderContainer => {
    let currentIndex = 0;
    const slides = sliderContainer.querySelector('.slider');
    const totalSlides = sliderContainer.querySelectorAll('.slide').length;
    const slideWidth = sliderContainer.querySelector('.slide').offsetWidth;

    sliderContainer.querySelector('.next').addEventListener('click', () => {
        if (currentIndex < totalSlides - 5) {
            currentIndex++;
            slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    });

    sliderContainer.querySelector('.prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    });

    window.addEventListener('resize', () => {
        slides.style.transform = `translateX(-${currentIndex * sliderContainer.querySelector('.slide').offsetWidth}px)`;
    });
});
