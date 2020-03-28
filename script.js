

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


//////////////Слайдер бургер/////////////////////////////

const left = document.querySelector('.scroll-left');
const right = document.querySelector('.scroll-right');
const items = document.querySelector('.burger__list');


left.addEventListener('click', function(e) {
  loop('left',e);
});

right.addEventListener('click', function(e) {
  loop('right',e);
});

function loop(direction, e) {
  e.preventDefault();
  if (direction==='right') {
    items.appendChild(items.firstElementChild);
  }
  else {
    items.insertBefore(items.lastElementChild, items.firstElementChild);
  }
}

  


//////////////////второй вариант//////////////////

/*const carousel = document.querySelector('.burger__list-wrapp');
const slider = document.querySelector('.burger__list');

const next = document.querySelector('.scroll-right');
const prev = document.querySelector('.scroll-left');
var direction;

prev.addEventListener('click', function(e) {
  e.preventDefault();
  if(direction === -1) {
    slider.appendChild(slider.firstElementChild); 
    direction = 1;
  }
  carousel.style.justifyContent = 'flex-end';
  slider.style.transform = 'translate(20%)'; 
});


next.addEventListener('click', function(e) {
  e.preventDefault();
  direction = -1;
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-20%)'; 
});



slider.addEventListener('transitionend', function() {
  if(direction === -1) {
    slider.appendChild(slider.firstElementChild);
  } else if(direction === 1) {
    slider.prepend(slider.lastElementChild);
  } 
 

  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(function() {
    slider.style.transition = 'all 0.3s';
  })
 
})*/
 






//////////////Состав бургера/////////////////////

/*const compasition = document.querySelector('.burger-compasition');
const burgerbutton = document.querySelector('.burger__image-icon');
const closecompasition = document.querySelector('.close-compasition');

burgerbutton.addEventListener('mouseover',  e=> {
  if(compasition.style.opacity == 0) {compasition.style.opacity = 0.9;
}
})

burgerbutton.addEventListener('mouseout',  e=> {
  if(compasition.style.opacity == 0.9) {compasition.style.opacity = 0;
}
})*/





//////////////меню аккордеон/////////////////////////

const menu = document.querySelector('.menu-choice'),
     accoitem = document.querySelectorAll('.menu-acco__item'),
     accoitemlength = accoitem.length;

menu.addEventListener('click', e => {
for (let i = 0; i<accoitemlength; i++) {
  accoitem[i].classList.remove('menu-acco__item--active'); 
}
})

for (let i = 0; i<accoitemlength; i++) {
  accoitem[i].addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    if (accoitem[i].classList.contains('menu-acco__item--active')){
      accoitem[i].classList.remove('menu-acco__item--active'); 
    }
    else {
      for (let i = 0; i<accoitemlength; i++) {
        accoitem[i].classList.remove('menu-acco__item--active'); 
      }
      accoitem[i].classList.add('menu-acco__item--active'); 
    }
  })
}


/////////////////////команда аккордеон//////////////////////////////


const team = document.querySelector('.team__right'),
     teamitem = document.querySelectorAll('.team__content'),
     teamitemLength = teamitem.length;

team.addEventListener('click', e => {
for (let i = 0; i<teamitemLength; i++) {
  teamitem[i].classList.remove('team__content--active'); 
}
})

for (let i = 0; i<teamitemLength; i++) {
  teamitem[i].addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    if (teamitem[i].classList.contains('team__content--active')){
      teamitem[i].classList.remove('team__content--active'); 
    }
    else {
      for (let i = 0; i<teamitemLength; i++) {
        teamitem[i].classList.remove('team__content--active'); 
      }
      teamitem[i].classList.add('team__content--active'); 
    }
  })
}
