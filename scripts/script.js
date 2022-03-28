      const name = document.querySelector('#name')
      const email = document.querySelector('#email')
      const message = document.querySelector('#message')
      const checkMark = document.querySelector('.check-mark')
      const animation = document.querySelectorAll('.animation')
      const card = document.querySelectorAll('.card');
      const skills = document.querySelector('.skills')
      const set = document.querySelectorAll('.set')
      const ball1 = document.querySelector('#ball1')
      const ball2 = document.querySelector('#ball2')
      const ball3 = document.querySelector('#ball3')
      
    
    
    // listen to the form submission
    document.querySelector('#myForm').addEventListener("submit", function (event) {
        event.preventDefault();

        const serviceID = "service_hxks1i7";
        const templateID = "template_yphxf65";

        setTimeout(function () {
          name.value = '';
          email.value = '';
          message.value = '';
        }, 500)
         
        // Send Email Here
        emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
            },
            (error) => {
              console.log("FAILED...", error);
              alert("FAILED...", error);
            }
          ); 

        // Hiding Inputs and Labels
        animation.forEach(e => {
          e.classList.add('hidden')
        })
          setTimeout(function () {
            animation.forEach(e => {
              e.style.display = 'none'
            })

            // Showing checkMark
            checkMark.style.fontSize = '10rem';
          },300)

      });


// Whether or not Top Btn shows
function isInViewPort(e){
	const rect = e.getBoundingClientRect();
	return(
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}
var mybutton = document.getElementById('myBtn');

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
	if (document.documentElement.scrollTop > 100){
		mybutton.style.opacity = '1';
		mybutton.style.cursor = 'pointer';

	}else{
		mybutton.style.opacity = '0';
		mybutton.style.cursor = 'default';
    
	};
};
function topFunction(){
	document.documentElement.scroll({
		top: 0,
		behavior: 'smooth'
	});
};


// Animations

window.onload = function(){
  card.forEach((e, ind) => {
    e.style.animationDelay = `${ ind * .3}s`;
    setTimeout(function(){
      e.style.opacity = '1';
    }, ind * 500)
  })
} 

document.addEventListener('scroll' , function(){
  if(isInViewPort(skills) === true){
    ball1.style.animation = 'roll-left 2s none';
    ball2.style.animation = 'roll-up 2s none';
    ball3.style.animation = 'roll-right 2s none';
    set.forEach((e) => {
      e.style.visibility = 'visible';
    }) 
  }
})


document.querySelectorAll('.letter').forEach(el=>{
  el.addEventListener('mouseover', () => {
    el.classList.add('jump')
    setTimeout(function(){
      el.classList.remove('jump')
    }, 500)
  })
})


// Carousel Projects

const sliders = document.querySelector('.projects-box');
const slide = document.querySelectorAll(".project");
let boxPadding = 64;
let scrollperclick = slide[1].clientWidth + boxPadding;
let scrollAmount = 0;


function sliderScrollLeft(){
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollperclick),
    behavior: 'smooth'
  })

  if(scrollAmount < 0){
    scrollAmount = 0
  }
}

function sliderScrollRight(){
  if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth){
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollperclick),
      behavior: 'smooth'
    })
  }
}





// const slide = document.querySelector(".projects-box");
// let slides = document.querySelectorAll(".project");
// const leftArrow = document.querySelector('#left-arrow');
// const rightArrow = document.querySelector('#right-arrow');
// let index = 1;

// const slideWidth = slides[index].clientWidth + 64;


// rightArrow.addEventListener('click', () => {
//   if(index >= slides.length - 1) return
//   index++;
//   slide.style.transform = `translateX(${-slideWidth * index}px)`
//   slide.style.transition = '.7s';
// })

// leftArrow.addEventListener('click', () => {
//   if(index <= 0) return
//   index--;
//   slide.style.transform = `translateX(${-slideWidth * index}px)`
//   slide.style.transition = '.7s';
//   leftArrow.disabled = true;
// })







// let index = 1;
// let slideId;
// const interval = 500;

// const firstClone = slides[0].cloneNode(true);
// const secondClone = slides[1].cloneNode(true);
// const thirdClone = slides[2].cloneNode(true);
// const fourthClone = slides[3].cloneNode(true);
// const lastClone = slides[5].cloneNode(true);


// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';


// slide.append(firstClone);
// slide.append(secondClone);
// slide.append(thirdClone);
// slide.append(fourthClone);
// slide.prepend(lastClone);


// const slideWidth = slides[index].clientWidth + 64;

// Autoplay turned off
// const startSlide = () => {
//   slideId = setInterval(() => {
//     index++;
//     slide.style.transform = `translateX(${-slideWidth * index}px)`
//     slide.style.transition = '.7s';
//   }, interval)
// }

// slide.addEventListener('mouseenter', () => {
//   clearInterval(slideId);
// })
// slide.addEventListener('mouseleave', startSlide)

// startSlide()

// slide.addEventListener('transitionend', () => {
//   slides = document.querySelectorAll(".project");
//   if(slides[index].id === firstClone.id){
//     slide.style.transition = 'none';
//     index = 1;
//     slide.style.transform = `translateX(${-slideWidth * index}px)`
//   }
//   else if(slides[index].id === lastClone.id){
//     slide.style.transition = 'none';
//     index = slides.length - 5;
//     slide.style.transform = `translateX(${-slideWidth * index}px)`
//   }
// })

// function moveToNextSlide(){
//   slides = document.querySelectorAll(".project");
//   if(index >= slides.length - 1) return
//   index++;
//   slide.style.transform = `translateX(${-slideWidth * index}px)`
//   slide.style.transition = '.7s';
//   rightArrow.disabled = true;
//   setTimeout(function () {
//     rightArrow.disabled = false;
//   }, 800)
// }

// function moveToPreviousSlide(){
//   if(index <= 0) return
//   index--;
//   slide.style.transform = `translateX(${-slideWidth * index}px)`
//   slide.style.transition = '.7s';
//   leftArrow.disabled = true;
//   setTimeout(function () {
//     leftArrow.disabled = false;
//   }, 800)
// }


// rightArrow.addEventListener('click', moveToNextSlide)
// leftArrow.addEventListener('click', moveToPreviousSlide)

// Mobile Nav
const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileItem = document.querySelectorAll('.mobile-item');

let showingMenu = false;

hamburger.addEventListener('click', () => {
  if(showingMenu === false){
    hamburger.style.transform = 'rotate(720deg)';
    hamburgerIcon.style.background = 'transparent';
    hamburgerIcon.classList.add('open');
    mobileMenu.style.transform = 'translateY(0)';
    showingMenu = true;
  }else if(showingMenu === true){
    hamburger.style.transform = 'rotate(-720deg)';
    hamburgerIcon.style.background = '#00aee9';
    hamburgerIcon.classList.remove('open');
    mobileMenu.style.transform = 'translateY(-100%)';
    showingMenu = false;
  }
})

mobileItem.forEach((e) => {
  e.addEventListener('click', () => {
    hamburger.style.transform = 'rotate(-720deg)';
    hamburgerIcon.style.background = '#00aee9';
    hamburgerIcon.classList.remove('open');
    mobileMenu.style.transform = 'translateY(-100%)';
  })
})

// Responsive
// let width = screen.width;

// function headerInfo(){
//   if(width === 910){
//     card.forEach((e) => {
//       e.addEventListener('click', () => {

//       })
//     })
//   }
// }

