/* OPEN MENU */

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('open')
}

/* SLIDER */

const imgs = document.getElementById('slider-img');
const img = document.querySelectorAll('#slider-img img');

let idx = 0;

function slider(){
  idx++;

  if(idx > img.length - 1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 900}px)`;
}

setInterval(slider, 3000);
