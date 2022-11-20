function hideSelf() {
  let s = document.querySelector(".hide-self-button");

  function hide1() {
    s.hidden = 'true';
  }

  s.addEventListener('click', hide1);

}
