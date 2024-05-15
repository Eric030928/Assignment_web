/* Make the transition works among all slide-containers */
document.addEventListener("DOMContentLoaded", function (event) {
    applySlideshow('.slideshow-container-1');
    applySlideshow('.slideshow-container-2');
    applySlideshow('.slideshow-container-3');
});

/* Make the transition works for each slide */
function applySlideshow(containerSelector) {
    const container = document.querySelector(containerSelector);
    const slides = container.querySelectorAll('.slide');
    let currentSlide = 0;
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active'); /* If it's time for it, set the status of the slide coming active */
            } else {
                slide.classList.remove('active');/* If not it, set the status of the slide coming active */
            }
        });
    }
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {/* Make sure the slides are enough */
            currentSlide = 0;
        }
        showSlide(currentSlide);/* Then show it */
    }
    setInterval(nextSlide, 2000); 
    showSlide(currentSlide); 
}



