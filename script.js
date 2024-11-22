//JavaScript for Mobile Menu Toggle

    // const mobileMenuButton = document.getElementById("mobile-menu-button");
    // const mobileMenu = document.getElementById("mobile-menu");

    // mobileMenuButton.addEventListener("click", () => {
    //     mobileMenu.classList.toggle("hidden");
    // });


//carousel script

document.addEventListener('DOMContentLoaded', () => {
const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach((carousel) => {
   const track = carousel.querySelector('.carousel-track');
   const prevButton = carousel.querySelector('.carousel-prev');
   const nextButton = carousel.querySelector('.carousel-next');
   const slides = track.querySelectorAll('.carousel-card');

   let currentIndex = 0;
   const slideDuration = 2000; // 3 seconds
   let isTransitioning = false;

   const updateCarousel = () => {
       const containerWidth = carousel.getBoundingClientRect().width;
       track.style.transition = 'transform 0.5s ease';
       track.style.transform = `translateX(-${currentIndex * containerWidth}px)`;

       setTimeout(() => {
           isTransitioning = false;
       }, 500);
   };

   const goToNextSlide = () => {
       if (isTransitioning) return;
       isTransitioning = true;
       currentIndex = (currentIndex + 1) % slides.length;
       updateCarousel();
   };

   const goToPrevSlide = () => {
       if (isTransitioning) return;
       isTransitioning = true;
       currentIndex = (currentIndex - 1 + slides.length) % slides.length;
       updateCarousel();
   };

   nextButton.addEventListener('click', goToNextSlide);
   prevButton.addEventListener('click', goToPrevSlide);

   const autoSlide = setInterval(goToNextSlide, slideDuration);

   [prevButton, nextButton].forEach((button) =>
       button.addEventListener('click', () => clearInterval(autoSlide))
   );

   window.addEventListener('resize', updateCarousel);

   updateCarousel();
});
});


//animation and styles
  
        AOS.init();
        window.onscroll = function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrollPercent = (scrollTop / docHeight) * 100;
            document.getElementById('progress-bar').style.width = scrollPercent + '%';
        };
   