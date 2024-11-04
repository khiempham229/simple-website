document.addEventListener('DOMContentLoaded', (event) => {
  console.log('Loaded!');

  const carouselList = document.querySelector('.carousel-list');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-control-btn.prev-btn');
  const nextBtn = document.querySelector('.carousel-control-btn.next-btn');

  let intervalId = null;
  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateCarousel() {
    const offset = -currentIndex * 100; // Di chuyển carousel theo Slide
    carouselList.style.transform = `translateX(${offset}%)`;

    if (intervalId) {
      // Reset chuyển Slide mỗi 5 giây
      clearInterval(intervalId);
    }

    // Tự động chuyển Slide mỗi 5 giây
    intervalId = setInterval(showNextSlide, 5000);
  }

  // Xử lý hiển thị Slide trước đó
  function showPrevSlide() {
    console.log('Prev Slide');
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Xử lý hiển thị Slide tiếp theo
  function showNextSlide() {
    console.log('Next Slide');
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  // Thêm event click cho 2 button
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);

    updateCarousel();
  }

});

function toggleFilter() {
  const filterDrawer = document.querySelector('.filter .filter-drawer')
  console.log(filterDrawer);
  filterDrawer.classList.toggle('open');
}