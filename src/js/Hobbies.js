document.addEventListener("DOMContentLoaded", function (event) {
    // 调用函数为第一个容器应用代码
    applySlideshow('.slideshow-container-1');

    // 调用函数为第二个容器应用代码
    applySlideshow('.slideshow-container-2');

    applySlideshow('.slideshow-container-3');
});

function applySlideshow(containerSelector) {
    const container = document.querySelector(containerSelector);
    const slides = container.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000); // 每 2 秒切换一张幻灯片

    showSlide(currentSlide); // 显示第一张幻灯片
}