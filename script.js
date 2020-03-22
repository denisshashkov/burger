

///////////////полноэкранное меню///////////////

const hamburger = document.querySelector ('.hamburger-menu-link');
const activemenu = document.querySelector ('.menu-active');
const close = document.querySelector ('.close-hamburger');
const logo = document.querySelector ('.logo');

hamburger.addEventListener ( 'click', function(e) {
  e.preventDefault();
  let heightValue = 100 + '%';
  activemenu.style.height = heightValue;
  close.style.opacity = 1;
  logo.style.position = 'fixed';
});

close.addEventListener ('click',function(){
  activemenu.style.height = 0;
  close.style.opacity = 0;
  logo.style.position = 'relative';
})


//////////////Состав бургера/////////////////////

const compasition = document.querySelector ('.burger-compasition');
const burgerbutton = document.querySelector ('.burger__image-icon');
const closecompasition = document.querySelector ('.close-compasition');


compasition.style.display = 'none';

burgerbutton.addEventListener ('click',  e=> {
  if (compasition.style.display == 'none') compasition.style.display = 'block';
  else compasition.style.display = 'none'
})

burgerbutton.addEventListener ('mouseover',  e=> {
  if (compasition.style.display == 'none') compasition.style.display = 'block';
})

burgerbutton.addEventListener ('mouseout',  e=> {
  if (compasition.style.display == 'block') compasition.style.display = 'none';
})


















//////////////меню аккордеон/////////////////////////

const menu = document.querySelector ('.menu-choice');
const accoitem = document.querySelectorAll ('.menu-acco__item');
const accoitemlength = accoitem.length;

menu.addEventListener ('click', e => {
for (let i = 0; i<accoItemlength; i++) {
  accoitem[i].classlist.remove('menu-acco__item--active'); 
}
});

for (let i = 0; i<accoitemlength; i++) {
  accoitem[i].addEventListener ('click', e => {
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


