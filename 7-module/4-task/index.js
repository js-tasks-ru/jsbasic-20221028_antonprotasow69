export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.renderStepSlide();
    this.sliderChangeValue();
    this.dragAndDrop()
  }

  renderStepSlide() {

    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.elem.innerHTML = `
    <!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb">
      <span class="slider__value">${this.value}</span>
    </div>
  
    <!--Полоска слайдера-->
    <div class="slider__progress"></div>
  
    <!-- Шаги слайдера (вертикальные чёрточки) -->
    <div class="slider__steps">
      
    </div>`

    let sliderSteps = this.elem.querySelector('.slider__steps');
    //  <span class="slider__step-active"></span> - выделенный

    for (let i = 0; i < this.steps; i++) {

      let s = document.createElement('span');

      if (i === 0) {
        s.classList.add('slider__step-active');
      }
      sliderSteps.append(s);

    }

  }

  sliderChangeValue() {

    let slider = this.elem;
    let allSteps = this.elem.querySelectorAll('.slider__steps > span');
    let segmentSlider = allSteps.length - 1;
    let sliderValue = this.elem.querySelector('.slider__value')

    this.elem.querySelector('.slider__progress').style.width = '0%';

    slider.addEventListener('click', (event) => {

      let rect = slider.getBoundingClientRect(); // значения слайдера
      let leftPercents = event.clientX - rect.left; // координаты курсора - расстояние от окноа до слайдера слева
      let leftRelative = leftPercents / slider.offsetWidth; // относительное значение от слайдера
      let approximateValue = leftRelative * segmentSlider; // относ. значение на кол-во сегментов
      let value = Math.round(approximateValue); // округление значения
      let valuePercents = value / segmentSlider * 100; // значение для преобразование в проценты
      let thumb = this.elem.querySelector('.slider__thumb');

      let progress = this.elem.querySelector('.slider__progress');

      for (let step of allSteps) {
        step.classList.remove('slider__step-active')
      }

      this.value = valuePercents / 100 * segmentSlider;

      let customChange = new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      });

      slider.dispatchEvent(customChange);

      allSteps[this.value].classList.add('slider__step-active');
      sliderValue.innerHTML = `${this.value}`;
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

    });

  }

  dragAndDrop() {

    let thumbDrag = this.elem.querySelector('.slider__thumb');
    let progressDrag = this.elem.querySelector('.slider__progress');
    let sliderValue = this.elem.querySelector('.slider__value');
    let allSteps = this.elem.querySelectorAll('.slider__steps > span');

    thumbDrag.addEventListener('pointerdown', (event) => {
      event.preventDefault();

      let onMouseMove = (event) => {

        this.elem.classList.add('slider_dragging');
        //event.preventDefault();

        let rect = this.elem.getBoundingClientRect();
        let left = event.clientX - rect.left;
        let leftRelative = left / this.elem.offsetWidth;

        if (leftRelative < 0) {
          leftRelative = 0;
        }

        if (leftRelative > 1) {
          leftRelative = 1;
        }

        let leftPercents = leftRelative * 100;

        thumbDrag.style.left = `${leftPercents}%`;
        progressDrag.style.width = `${leftPercents}%`;

        let segmentSlider = allSteps.length - 1;

        let approximateValue = leftRelative * segmentSlider;
        let value = Math.round(approximateValue);
        let valuePercents = value / segmentSlider * 100;
        this.value = valuePercents / 100 * segmentSlider;

        sliderValue.innerHTML = `${this.value}`;

        for (let step of allSteps) {
          step.classList.remove('slider__step-active')
        }
        allSteps[this.value].classList.add('slider__step-active');

      };

      document.addEventListener('pointermove', onMouseMove);

      document.onpointerup = () => {

        this.elem.classList.remove('slider_dragging');

        let dragCustom = new CustomEvent('slider-change', {
          detail: this.value,
          bubbles: true
        });
        this.elem.dispatchEvent(dragCustom);

        document.removeEventListener('pointermove', onMouseMove);
        thumbDrag.onpointerup = null;
      };

    });

    thumbDrag.ondragstart = function () { return false };
  }
}
