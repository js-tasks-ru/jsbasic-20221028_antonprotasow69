function initCarousel() {

  let carousel = document.querySelector('.carousel');
  let slides = document.getElementsByClassName('carousel__inner');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrows = document.querySelectorAll('.carousel__arrow > img');
  let width = slides[0].offsetWidth;
  let counter = 0;

  arrowLeft.style.display = 'none';

  function slide(event) {

    let target = event.target;

    if (target != arrows[0] && target != arrows[1] && target != arrowRight
      && target != arrowLeft) {
      return;

    }

    else if (target == arrows[0] || target == arrowRight) {

      counter += width;
      slides[0].style.transform = `translateX( ${'-' + counter + 'px'} )`;

      if (counter == width * 3) {
        arrowRight.style.display = 'none';
      }
    }

    else if (target == arrows[1] || target == arrowLeft) {

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
