function initCarousel() {
  let carousel = document.querySelector('.carousel');
  let slides = document.getElementsByClassName('carousel__slide');
  let width = slides[0].offsetWidth + 'px';

  function slide(event) {
    let target = event.target;

    if (!target.classList.contains('carousel__arrow')) {
      return;
    }

    else if (target.classList.contains('carousel__arrow_right')) {

      slides[0].style.transform = `translateX( ${'-' + width} )`;


    }

    else if (target.classList.contains('carousel__arrow_left')) {
      slides[0].style.transform = `translateX( ${width} )`;

    }


  }

  carousel.addEventListener('click', slide)

}
