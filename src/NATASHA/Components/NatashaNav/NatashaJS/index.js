let socialNav = document.querySelector('.social__nav');
let navToggler = document.querySelector('.social__nav__toggler');

//adding eventLister to the navToggler
navToggler.addEventListener('click', function(){
    socialNav.classList.toggle('active');
});