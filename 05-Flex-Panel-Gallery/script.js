const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  };
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// when someone clicks me, find this function and run it
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
