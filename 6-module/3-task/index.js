import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render(slides);
    this.initCarousel();

  }

  render(slides) {

    this.elem = createElement(`<div class="carousel">
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    <div class="carousel__inner">
      <!--Верстка 1-ого слайда-->
    <div class="carousel__slide" data-id="penang-shrimp">
   <img src="/assets/images/carousel/${this.slides[0].image}" class="carousel__img" alt="slide">
   <div class="carousel__caption">
     <span class="carousel__price">€${this.slides[0].price.toFixed(2)}</span>
     <div class="carousel__title">${this.slides[0].name}</div>
     <button type="button" class="carousel__button">
       <img src="/assets/images/icons/plus-icon.svg" alt="icon">
     </button>
   </div>
 </div>
 <div class="carousel__slide" data-id="penang-shrimp">
   <img src="/assets/images/carousel/${this.slides[1].image}" class="carousel__img" alt="slide">
   <div class="carousel__caption">
     <span class="carousel__price">€${this.slides[1].price.toFixed(2)}</span>
     <div class="carousel__title">${this.slides[1].name}</div>
     <button type="button" class="carousel__button">
       <img src="/assets/images/icons/plus-icon.svg" alt="icon">
     </button>
   </div>
 </div>
 <div class="carousel__slide" data-id="penang-shrimp">
   <img src="/assets/images/carousel/${this.slides[2].image}" class="carousel__img" alt="slide">
   <div class="carousel__caption">
     <span class="carousel__price">€${this.slides[2].price.toFixed(2)}</span>
     <div class="carousel__title">${this.slides[2].name}</div>
     <button type="button" class="carousel__button">
       <img src="/assets/images/icons/plus-icon.svg" alt="icon">
     </button>
   </div>
 </div>
 <div class="carousel__slide" data-id="penang-shrimp">
   <img src="/assets/images/carousel/${this.slides[3].image}" class="carousel__img" alt="slide">
   <div class="carousel__caption">
     <span class="carousel__price">€${this.slides[3].price.toFixed(2)}</span>
     <div class="carousel__title">${this.slides[3].name}</div>
     <button type="button" class="carousel__button">
       <img src="/assets/images/icons/plus-icon.svg" alt="icon">
     </button>
    </div>
   </div>
  </div>
 </div`);




  }

  initCarousel() {

    let counter = 0;

    function slide(event) {

      let slides = document.getElementsByClassName('carousel__inner');
      let arrowRight = document.querySelector('.carousel__arrow_right');
      let arrowLeft = document.querySelector('.carousel__arrow_left');
      let arrows = document.querySelectorAll('.carousel__arrow > img');
      let width = slides[0].offsetWidth;
      let target = event.target;
      let slideName = document.getElementsByClassName('carousel__slide');

      if (target != arrows[0] && target != arrows[1] && target != arrowRight
        && target != arrowLeft) {
        return;

      }

      else if (target == arrows[0] || target == arrowRight) {

        counter = counter + width;
        slides[0].style.transform = `translateX( ${'-' + counter + 'px'} )`;
        console.log(counter)

      }

      else if (target == arrows[1] || target == arrowLeft) {

        counter = counter - width;
        slides[0].style.transform = `translateX( ${'-' + counter + 'px'})`;

      }


      if (counter === 0) {
        arrowLeft.style.display = 'none';
      }
      else arrowLeft.style.display = '';

    }
    this.elem.addEventListener('click', slide);

    document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('.carousel__arrow_left').style.display = 'none'
    });



  }

}
