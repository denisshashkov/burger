

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



////////////////КАРТА YANDEX//////////////////////////////

let myMap;

const init = () => {
  myMap=new ymaps.Map("map", {
  center: [59.935274, 30.312388],
  zoom: 11,
  //controls: []
  });


  const coords = [
    [59.94554327989287, 30.38935262114668],
    [59.91142323563989, 30.50024587065841],
    [59.88693161784606, 30.319658102103713],
    [59.97033574821672, 30.315194906302924]
  ];

  const myCollection = new ymaps.GeoObjectCollection({},{
    dragable: false,
    iconLayout: 'default#image',
    iconImageHref: "../image/icons/map-marker.svg",
    iconImageSize: [46,57],
    iconImageOffset: [-35,-52]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });
  
  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');

 

  }

ymaps.ready(init);


///////////////////////PLAYER///////////////////////////



let player;
const playerContainer = $(".player");

let eventsInit = () => {
  $(".player__start").click(e =>{
    e.preventDefault();
   
    if(playerContainer.hasClass("paused")){
      playerContainer.removeClass("paused");
     player.pauseVideo();
    } else{
    player.playVideo();
    }
  }); 

    $(".player__splash").click(e => {
      player.playVideo();
    })

};



$(".player__playback").click( e => {
  const bar = $(e.currentTarget);
 const clickedPosition = e.originalEvent.LayerX;
 const newButtonPositionPercent = (clickedPosition/bar.width())*100;
 const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;
 player.seekTo(newPlaybackPositionSec);
});


const onPlayerReady = () => {
  let interval;
  const durationSec = player.getDuration();

 
 
  interval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec/durationSec)*100;
    
    $(".player__playback-button").css({
      left: `${completedPercent}%`
    });
  },1000);
};











const onPlayerStateChange = event => {
/*
-1 (воспроизведение видео не начато)
0 (воспроизведение видео завершено)
1 (воспроизведение)
2 (пауза)
3 (буферизация)
5 (видео подают реплики).
*/

  switch (event.data) {
    case 1:
      playerContainer.addClass('active');
      playerContainer.addClass("paused");
      break;

    case 2:
      playerContainer.removeClass('active');
      playerContainer.removeClass("paused");
      break;  
  }
};



function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "405",
    width: "660",
    videoId: "V5w1OGknhlc",
    events: {
     'onReady': onPlayerReady,
     'onStateChange': onPlayerStateChange
    },

    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }

  });
}

eventsInit();







///////////////ONE PAGE SCROLL/////////////////////////////


const sections = $(".section");
const display = $(".maincontent");

let inScroll = false;
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();
/////////////////////////////////////////
const performTransition = (sectionEq) => {
  if (inScroll === false) {
    inScroll = true;
    const position =  sectionEq * -100;

    sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
  
    display.css({
      transform: `translateY(${position}%)`,
    });

   setTimeout(() => {
     $(".nav__item").eq(sectionEq).addClass(" nav__item--active").siblings().removeClass("nav__item--active");
     inScroll = false;
   },500);
  }
};
/////////////////////////////////////
  const scrollSection = direction => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();
    if (nextSection.length && direction === "next") {
      performTransition(nextSection.index());
    }
    if (prevSection.length && direction === "prev") {
      performTransition(prevSection.index());
    }
  }
////////////////////////////////////
$(window).on("wheel", e => {
const deltaY = e.originalEvent.deltaY;

if (deltaY > 0) {
  scrollSection("next");
}
if (deltaY < 0) {
  scrollSection("prev");
} 
});

/////////////////////////////////////
$(document).on("keydown", (e) => {

const tagName = e.target.tagName.toLowerCase();
if (tagName != "input" && tagName != "textarea") {
  switch (e.keyCode) {
    case 38:
      scrollSection("prev");
    break;
    case 40:
      scrollSection("next");
      break;
  }
}
});

/////////////////////////////////////////
$("[data-scroll-to]").on("click", e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");

  performTransition(target);
})
///////////////////////////////////////////

if (isMobile) {
  $("body").swipe({
    swipe: (event, direction) => {
      let scrollDirection;
      if (direction === "up") scrollDirection = "next";
      if (direction === "down") scrollDirection = "prev";
  
      scrollSection(scrollDirection);
    },
  
  });  
}

















  
 
























////////////////////SLIDER JQUERY///////////////////

/*$(function() {

  $('.scroll-right').on('click',function(e) {
    e.preventDefault();

    var $this = $(this),
         container =$this.closest('.burger__list-wrapp'),
        items = container.find('.burger__item'),
        activeSlide = items.filter('.active'),
         reqitem = activeSlide.next(),
         reqindex = reqitem.index(),
         list = container.find('.burger__list'),
         duration = 500;

     list.animate({
       'left':-reqindex*100+'%'
     },duration);   

  })
})*/

