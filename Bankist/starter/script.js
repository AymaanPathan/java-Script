'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  // e.prevernDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// console.log(document.body)

const header = document.querySelector(".header")

const allBtns = document.getElementsByTagName("button");
// console.log(allBtns)

const tabs = document.querySelectorAll(".operations__tab")
const tabsContainer = document.querySelector(".operations__tab-container")
const tabsContent = document.querySelectorAll(".operations__content")
const nav = document.querySelector(".nav")


//  IMPLIMENTATION OF WEBSITE


// VIDEO 7 (SMOOTH SCROLLING)
const btnScrollTo = document.querySelector(".btn--scroll-to")
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords)
  console.log(e.target.getBoundingClientRect())

  section1.scrollIntoView({ behavior: "smooth" })
})
// VIDEO 7 (SMOOTH SCROLLING) ENDS




// Video 11 (Navigation Click: "Smooth")
// document.querySelectorAll(".nav__link").forEach(function(el) {
//   el.addEventListener("click",function(e){
//     e.preventDefault()                                            // Not a proper way
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   })
// })



document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault()
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href")
    document.querySelector(id).scrollIntoView({ behavior: "smooth" })
  }
})



// Video 11 (Navigation Click: "Smooth") ENDS

// Video 13 TABBED Component STARTS 


tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab")
  if (!clicked) return;

  tabs.forEach(el => el.classList.remove("operations__tab--active"))

  tabsContent.forEach(e => e.classList.remove("operations__content--active"))

  clicked.classList.add("operations__tab--active")


  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add
    ("operations__content--active")
})



//  Video 13 TABBED Component ENDS 





//  Video 14 STARTS
const mouseHandler = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const links = e.target;
    const siblings = links.closest(".nav").
      querySelectorAll(".nav__link")
    const logo = links.closest(".nav").querySelector("img")
    siblings.forEach(el => {
      if (el !== links)
        el.style.opacity = this;
      logo.style.opacity = this;

    })
  }
}


nav.addEventListener("mouseover", mouseHandler.bind(0.5))
nav.addEventListener("mouseout", mouseHandler.bind(1))





// Video 14 ENDS



//video 15 Starts


const cordination = section1.getBoundingClientRect();

window.addEventListener("scroll",function(e){
console.log(window.scrollY)

if(window.scrollY > cordination.top) 
  nav.classList.add("sticky"); 

  else {
    nav.classList.remove("sticky");
  }

})




//Video 16 Starts
const head = document.querySelector(".header")
const bounding = nav.getBoundingClientRect().height


const obsCallback = function (entries) {
  const [entry] = entries;  // coz we have only one threshold

  nav.classList.add("sticky")
  if (entry.isIntersecting)
    nav.classList.remove("sticky");
}

const options = {
  threshold: 0,
  rootMargin: "-81px"  // inside target element means header  if it is +81 its outside header
}

const observer = new IntersectionObserver(obsCallback, options)

observer.observe(head)
// Video 16 Ends


// Video 17 starts

const allSection = document.querySelectorAll(".section");


const sectionCallback = function (entries,observe) {
  const [entry] = entries;

  entry.target.classList.remove("section--hidden")  // target coz whenever each section target its comes out
  observe.unobserve(entry.target)
}

const secOptions = {
  threshold:0.25,
}

const sectionObserver = new IntersectionObserver(sectionCallback, secOptions)


allSection.forEach(section => {
  sectionObserver.observe(section)
  section.classList.add("section--hidden")
})

// Video 17 Ends

// Video 18 Starts

const img = document.querySelectorAll("img[data-src]")

const imgCallback = function(entries,observer) {
  const [entry] = entries;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load",function() {
    entry.target.classList.remove("lazy-img")
    observer.unobserve(entry.target)
  })
}
const imgOptions = {
  threshold:0.15,
}


const imgObserver = new IntersectionObserver(imgCallback,imgOptions)

img.forEach(img => imgObserver.observe(img) )


// Video 18 Ends

// Video 19 Starts

const slide = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left")
const btnright = document.querySelector(".slider__btn--right")

let currSlide = 0;
let maxSlide=slide.length-1

// slider.style.transform = 'scale(0.4) translateX(-900px)';
// slider.style.overflow = 'visible';


const slideGo = function(go) {
  slide.forEach((s,i) =>(s.style.transform = `translateX(${100*(i-go)}%)`))
}

slideGo(0);

const rightSlide = function() {

    if(currSlide===maxSlide) {
      currSlide=0;
    }
    else {
      currSlide++;
    }
    slideGo(currSlide)
  }

   const leftSlide = function() {
    
    if(currSlide===0) {
      currSlide= maxSlide;
    }
    else{
      currSlide--;
    }
    slideGo(currSlide)
  }
  btnLeft.addEventListener("click",leftSlide)
  btnright.addEventListener("click",rightSlide)

//Video 19 Ends


//Video 20 Starts

document.addEventListener("keydown",function(e){
  if(e.key==='ArrowRight') {
    rightSlide();
  };
  if (e.key==='ArrowLeft') {
    leftSlide()
  }
})

// Video 20 Ends

///// /////// ////////////////////////////////////////////////////////////////////////////


// LECTURES CODING

// Video 5 STARTS

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `Except Cookies.<button class = "btn
// btn--close-cookie">Accept Cookie</button >`

// header.prepend(message) // pre means top
// // header.append(message)

// // header.append(message.cloneNode(true))   // clone

// // header.before(message)
// // header.after(message)

// document.querySelector(".btn--close-cookie").
// addEventListener("click",function() {
//   message.remove()
// })

// Video 5 ENDS
//-------------------------------------------------------------------





//  Video 6 Start

// message.style.background = "blue"
// console.log(getComputedStyle(message).height)
// console.log(getComputedStyle(message).background)

// document.documentElement.style.setProperty("--color-primary","red")

// const logo = document.querySelector(".nav__logo")
// console.log(logo.alt)
// console.log(logo.src)

// logo.setAttribute("designer","aymaan")


// console.log(logo.getAttribute("designer"))
// console.log(logo.getAttribute("src"))

// Video 6 Ends
//-------------------------------------------------------------------



// Video 8 Starts

// const h1 = document.querySelector("h1")

// const ev = function(e){
//   alert("hello")
// h1.removeEventListener("mouseenter",ev)
// }

// h1.addEventListener("mouseenter",ev)

// Video 8 Ends
//-------------------------------------------------------------------


// Video 10 Starts


// const randomInt = (min,max) => Math.floor(Math.random() * 
// (max-min+1) + min)

// const randomColor = () => 
//   `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
//   console.log(randomColor(0,255))


// document.querySelector(".nav").addEventListener("click",function(e){
//   this.style.backgroundColor = randomColor()
//   console.log(e.target,e.currentTarget)
// })


// document.querySelector(".nav__link").addEventListener("click",function(e){
//   this.style.backgroundColor = randomColor()
//   console.log("link")
// })

// Video 10 Ends-----------------------------------------




// Video 12 starts


// PARENT ELEMENTS
// const h1 = document.querySelector("h1");
// console.log(h1.querySelectorAll(".highlight"))
// console.log(h1.childNodes)
// console.log(h1.children)


// // CHILD ELEMENT
// h1.firstElementChild.style.color = "white"

// h1.closest("header").style.background = "orange"


// SIBLINGS OR SIDEWAYS ELEMENT
// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)

// console.log(h1.nextSibling)
// console.log(h1.previousSibling)



// console.log(h1.parentElement.children);


// FUN EXPERIMENT

// [...h1.parentElement.children].forEach(function(el){
//   if(el!==h1) el.style.transform = 'scale(0.5)';
// });

// Video 12 END


// Video 21 Starts

document.addEventListener("DOMContentLoaded",function(e){
  console.log("Dom is loaded",e)
})

window.addEventListener("load",function(e){
  console.log("Page Fully Loaded",e)
})

window.addEventListener("beforeunload",function(e){
})
// Video 21 Ends