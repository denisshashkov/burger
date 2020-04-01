

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
     accoContent = document.querySelector('.menu-acco__content');
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



//////////////////////////////ФОРМА /////////////////////////////////


const form = document.querySelector('.form-wrap');
const orderButton = document.querySelector('.btn-submit');
const orderOverlay = document.querySelector('.order-overlay');
const orderOverlayError = document.querySelector('.order-overlay-error');
const closed = document.querySelector('.btn-close');
const closeError = document.querySelector('.btn-close-error');
const orderInput = document.querySelector('.order__input');

form.addEventListener('submit', event => { 
 event.preventDefault();

  const formData = new FormData();
  formData.append('name',  form.elements.name.value);
  formData.append('phone',  form.elements.phone.value);
  formData.append('comment',  form.elements.comment.value);
  formData.append('to',  'mi@gmail.com');

if (validateForm(form)) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST',' https://webdev-api.loftschool.com/sendmail');
  xhr.send(formData);
  xhr.addEventListener('load', () => {
    if(xhr.response.status >= '400') {
     orderOverlayError.style.display = 'block';
     body.style.overflow = 'hidden';
    }
    else {
      orderOverlay.style.display = 'block';
      body.style.overflow = 'hidden';
      form.elements.name.value ="";
      form.elements.phone.value ="";
      form.elements.street.value ="";
      form.elements.house.value ="";
      form.elements.housing.value ="";
      form.elements.flat.value ="";
      form.elements.floor.value ="";
      form.elements.comment.value ="";
    }

  })
}
})
////////////запрет на числа в поле с именем/////////////////
form.elements.name.addEventListener('keydown', e => {

let keyNumber = e.key;

  if ( keyNumber >= '0' && keyNumber <= '9'){
  e.preventDefault();
  }
});
////////////запрет на буквы в поле с телефоном///////////////
form.elements.phone.addEventListener('keydown', e => {

  let keyphone = e.key;
  
    if (keyphone >= '0' && keyphone <= '9'|| keyphone == '(' || keyphone == ')'|| keyphone == '+'||
     keyphone == '-'||keyphone == 'ArrowLeft' || keyphone == 'ArrowRight' || keyphone == 'Delete' || keyphone == 'Backspace') {
    return true;
    }
    else {
      e.preventDefault();
    }
  });
  /////////////запрет на числа в поле улица//////////////////
  form.elements.street.addEventListener('keydown', e => {

    let keyStreet = e.key;
    
      if ( keyStreet >= '0' && keyStreet <= '9'){
      e.preventDefault();
      }
    });  
//////////////запрет на буквы в поле квартира////////////////////
form.elements.flat.addEventListener('keydown', e => {

  let keyflat = e.key;
  
    if (keyflat >= '0' && keyflat <= '9'||keyflat == 'ArrowLeft' || keyflat == 'ArrowRight' || keyflat == 'Delete' || keyflat == 'Backspace') {
    return true;
    }
    else {
      e.preventDefault();
    }
  });
///////////////запрет на буквы в поле этаж////////////////////////
form.elements.floor.addEventListener('keydown', e => {

  let keyfloor = e.key;
  
    if (keyfloor >= '0' && keyfloor <= '9'||keyfloor == 'ArrowLeft' || keyfloor == 'ArrowRight' || keyfloor == 'Delete' || keyfloor == 'Backspace') {
    return true;
    }
    else {
      e.preventDefault();
    }
  });

  

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
      valid = false;
  }

  if (!validateField(form.elements.phone)) {
      valid = false;
  }

  if (!validateField(form.elements.street)) {
    valid = false;
}

if (!validateField(form.elements.house)) {
  valid = false;
}

if (!validateField(form.elements.housing)) {
  valid = false;
}

if (!validateField(form.elements.flat)) {
  valid = false;
}

if (!validateField(form.elements.floor)) {
  valid = false;
}
 

  return valid;
}

function validateField(field) {
  if (!field.checkValidity()) {
      field.nextElementSibling.textContent = field.validationMessage;

      return false;
  } else {
      field.nextElementSibling.textContent = '';

      return true;
  }
}

closed.addEventListener('click', e => {
  orderOverlay.style.display = 'none';
  body.style.overflow = 'visible';
})

closeError.addEventListener('click', e => {
  orderOverlayError.style.display = 'none';
  body.style.overflow = 'visible';
})



//////////////////OVERLAY REVIEWS////////////////////


const reviews = document.querySelector('.reviews__list');
const overlay = document.querySelector('.overlay');
const popupName = document.querySelector('.popup__name');
const popupText = document.querySelector('.popup__text');
const closePopup = document.querySelector('.close-popup');

reviews.addEventListener('click', e => {
  let element = e.target;

  if (element.tagName === 'BUTTON') {
  let modalName = element.previousElementSibling.previousElementSibling.innerHTML;
   let modalText = element.previousElementSibling.innerHTML;
 
   popupName.innerHTML = modalName;
    popupText.innerHTML = modalText;
    overlay.style.display = 'block';
    body.style.overflow = 'hidden';
  }

  if (element.tagName === 'SPAN') {
     let modalName = element.parentNode.previousElementSibling.previousElementSibling.innerHTML;
     let modalText = element.parentNode.previousElementSibling.innerHTML;
   
      popupName.innerHTML = modalName;
      popupText.innerHTML = modalText;
      overlay.style.display = 'block';
      body.style.overflow = 'hidden';
    }
  

})

closePopup.addEventListener('click', e => {
  overlay.style.display = 'none';
  body.style.overflow = 'visible';
})

document.addEventListener('keyup', e => {
  let keyName = e.key;

  if(keyName === 'Escape') {
    overlay.style.display = 'none';
    body.style.overflow = 'visible';
    orderOverlay.style.display = 'none';
    orderOverlayError.style.display = 'none';
  }
})


////////////////////OVERLAY  ORDER///////////////////



