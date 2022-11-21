function initCarousel() {

  let carousel = document.querySelector('.carousel');
  let slides = document.getElementsByClassName('carousel__inner');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let width = slides[0].offsetWidth;
  let counter = 0;

  arrowLeft.style.display = 'none';

  function slide(event) {

    let target = event.target;

    if (!target.classList.contains('carousel__arrow')) {
      return;

    }

    else if (target.classList.contains('carousel__arrow_right')) {

      counter += width;
      slides[0].style.transform = `translateX( ${'-' + counter + 'px'} )`;

      if (counter == width * 3) {

        arrowRight.style.display = 'none';

      }

    }

    else if (target.classList.contains('carousel__arrow_left')) {
      counter = counter - width;
      slides[0].style.transform = `translateX( ${'-' + counter + 'px'})`;
      arrowRight.style.display = '';




    }
    if (counter != 0) {
      arrowLeft.style.display = '';
    }
    else arrowLeft.style.display = 'none';

  }

  carousel.addEventListener('click', slide)

}
