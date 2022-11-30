import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {

    this.closeOnMark();
    this.closeOnKey();


  }

  open() {

    this.elem = document.body;
    this.elem.innerHTML = `<!--Корневой элемент Modal-->
      <div class="modal">
        <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>
    
        <div class="modal__inner">
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
        </div>
    
      </div>`;
    let modalOpen = document.body;
    modalOpen.classList.add('is-modal-open');

  }

  setTitle(titleName) {
    // this.open();
    let modalTitle = this.elem.querySelector('.modal__title');

    modalTitle.innerHTML = titleName;
  }

  setBody(modalBody) {
    // this.open();
    let oldBody = this.elem.querySelector('.modal__body');
    oldBody.innerHTML = null;

    let bodyModal = oldBody;
    bodyModal.innerHTML = modalBody;

  }

  close() {

    document.body.classList.remove('is-modal-open');
    document.body.innerHTML = null;
    document.removeEventListener('keydown', this.escPressed)

  }

  closeOnMark() {
    this.open()


    document.addEventListener('click', function (event) {
      let target = event.target;

      if (target.closest('.modal__close')) {

        document.body.innerHTML = null;

        document.body.classList.remove('is-modal-open');
        document.removeEventListener('keydown', this.escPressed)
      }
    });
  }

  closeOnKey() {

    document.addEventListener('keydown', escPressed)

    function escPressed(event) {

      if (event.code === 'Escape') {
        document.body.innerHTML = null;
        document.body.classList.remove('is-modal-open');
        document.removeEventListener('keydown', this.escPressed)
      }
    };
  }
}
