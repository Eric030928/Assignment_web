document.addEventListener("DOMContentLoaded", function(event) {
    const slides = document.querySelectorAll('.slide');
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
  });