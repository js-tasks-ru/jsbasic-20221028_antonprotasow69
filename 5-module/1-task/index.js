function hideSelf() {
  let s = document.querySelector(".hide-self-button");

  function hide1() {
    s.setAttribute('hidden', '');
  }

  s.addEventListener('click', hide1);

}
