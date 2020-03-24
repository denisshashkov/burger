

///////////////полноэкранное меню///////////////

const hamburger = document.querySelector('.hamburger-menu-link');
const activemenu = document.querySelector('.menu-active');
const close = document.querySelector('.close-hamburger');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

hamburger.addEventListener( 'click', function(e) {
  e.preventDefault();
  let heightValue = 100 + '%';
  activemenu.style.height = heightValue;
  close.style.opacity = 1;
  logo.style.position = 'fixed';
  body.style.overflow = 'hidden';
});

close.addEventListener('click',function(){
  activemenu.style.height = 0;
  close.style.opacity = 0;
  logo.style.position = 'relative';
  body.style.overflow = 'visible';
})


//////////////Слайдер/////////////////////////////

/*const left = document.querySelector('.scroll-left');
const right = document.querySelector('.scroll-right');
const items = document.querySelector('.burger__list');

left.addEventListener('click', function(e) {
  loop('left',e);
});

right.addEventListener('click', function(e) {
  loop('right',e);
});

function loop(direction,e) {
  e.preventDefault();
  if (direction==='right') {
    items.appendChild(items.firstElementChild);
  } else {
    items.insertBefore(items.lastElementChild, items.firstElementChild);
  }
}*/


//////////////Состав бургера/////////////////////

const compasition = document.querySelector('.burger-compasition');
const burgerbutton = document.querySelector('.burger__image-icon');
const closecompasition = document.querySelector('.close-compasition');


compasition.style.display = 'none';

burgerbutton.addEventListener('click',  e=> {
  if(compasition.style.display == 'none') compasition.style.display = 'block';
  else compasition.style.display = 'none'
})

burgerbutton.addEventListener('mouseover',  e=> {
  if(compasition.style.display == 'none') compasition.style.display = 'block';
})

burgerbutton.addEventListener('mouseout',  e=> {
  if(compasition.style.display == 'block') compasition.style.display = 'none';
})






//////////////меню аккордеон/////////////////////////

const menu = document.querySelector('.menu-choice'),
     accoitem = document.querySelectorAll('.menu-acco__item'),
     accoitemlength = accoitem.length;

menu.addEventListener('click', e => {
for (let i = 0; i<accoitemlength; i++) {
  accoitem[i].classlist.remove('menu-acco__item--active'); 
}
})

for (let i = 0; i<accoitemlength; i++) {
  accoitem[i].addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    if (accoitem[i].classList.contains('menu-acco__item--active')){
      accoitem[i].classlist.remove('menu-acco__item--active'); 
    }
    else {
      for (let i = 0; i<accoitemlength; i++) {
        accoitem[i].classlist.remove('menu-acco__item--active'); 
      }
      accoitem[i].classlist.add('menu-acco__item--active'); 
    }
  })
}


/////////////////////команда//////////////////////////////


