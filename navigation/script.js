const hamberger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamberger.addEventListener('click',()=>{
  hamberger.classList.toggle('active')
  navMenu.classList.toggle('active')
})