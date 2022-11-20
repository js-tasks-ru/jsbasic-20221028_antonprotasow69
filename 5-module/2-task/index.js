function toggleText() {
  let elemButton = document.getElementsByClassName('toggle-text-button')[0];

  function hide() {
    text.hidden = !text.hidden;

  }

  elemButton.addEventListener('click', hide);

}
