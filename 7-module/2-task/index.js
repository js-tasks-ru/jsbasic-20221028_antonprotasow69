import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.documentBody = document.querySelector('body');
    this.container = document.querySelector('.container');
    this.modalRender();

  }

  open() {
    this.documentBody.classList.add('is-modal-open');

  }

  modalRender() {
    let elem = document.createElement('div');
    elem.classList.add('modal');

    this.elem = elem;

    let overlayModal = createElement(`
    <div class="modal__overlay"></div>`);

    let modalInner = createElement(`<div class="modal__inner">
          <div class="modal__header">
            <!--Кнопка закрытия модального окна-->
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок 
            </h3>
          </div>
          <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
          </div>
        </div>`)
    this.elem.appendChild(overlayModal);
    this.elem.appendChild(modalInner);


    this.documentBody.append(this.elem);


    this.closeOnMark();
    this.closeOnKey();
  }

  setTitle(titleName) {

    let modalTitle = this.elem.querySelector('.modal__title');
    modalTitle.innerHTML = titleName;
  }

  setBody(modalBody) {

    let oldBody = this.elem.querySelector('.modal__body');
    oldBody.innerHTML = null;

    oldBody.appendChild(modalBody)

  }

  close() {

    this.elem.remove();
    this.documentBody.classList.remove('is-modal-open');

    document.removeEventListener('keydown', this.escPressed)

  }

  closeOnMark() {

    let closeButton = this.elem.querySelector('.modal__close');

    closeButton.addEventListener('click', () => {

      this.elem.remove()
      this.documentBody.classList.remove('is-modal-open');
      document.removeEventListener('keydown', this.escPressed)

    });

  }

  closeOnKey() {
    document.addEventListener('keydown', this.escPressed)
  }

  escPressed = (event) => {

    if (event.code === 'Escape') {
      this.close();
    };
  };
}
