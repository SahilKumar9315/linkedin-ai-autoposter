burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
search = document.querySelector('.search')
nav = document.querySelector('.nav')



burger.addEventListener('click', () =>{
    navbar.classList.toggle('h-nav');
    search.classList.toggle('v-class');
    nav.classList.toggle('v-class');

});