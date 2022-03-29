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
    }, 300)

});

// Responsive animation

let width = window.innerWidth;
headerInfo()

function headerInfo() {
    if (width > 700) {
        document.addEventListener('scroll', function () {
            if (isInViewPort(skills) === true) {
                ball1.style.animation = 'roll-left 2s none';
                ball2.style.animation = 'roll-up 2s none';
                ball3.style.animation = 'roll-right 2s none';
                set.forEach((e) => {
                    e.style.visibility = 'visible';
                })

            }
        })
    } else {
        set.forEach((e) => {
            e.style.visibility = 'visible';
        })
    }
}


// Whether or not Top Btn shows
function isInViewPort(e) {
    const rect = e.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
var mybutton = document.getElementById('myBtn');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
        mybutton.style.opacity = '1';
        mybutton.style.cursor = 'pointer';

    } else {
        mybutton.style.opacity = '0';
        mybutton.style.cursor = 'default';

    };
};
function topFunction() {
    document.documentElement.scroll({
        top: 0,
        behavior: 'smooth'
    });
};


// Animations

window.onload = function () {
    if (width > 700) {
        card.forEach((e, ind) => {
            e.style.animation = 'rise 3s none';
            e.style.animationDelay = `${ind * .3}s`;
            setTimeout(function () {
                e.style.opacity = '1';
            }, ind * 500)
        })
    } else {
        card.forEach((e, index) => {
            e.style.opacity = '1';
        })
    }
}


document.querySelectorAll('.letter').forEach(el => {
    el.addEventListener('mouseover', () => {
        el.classList.add('jump')
        setTimeout(function () {
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


function sliderScrollLeft() {
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollperclick),
        behavior: 'smooth'
    })

    if (scrollAmount < 0) {
        scrollAmount = 0
    }
}

function sliderScrollRight() {
    if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollperclick),
            behavior: 'smooth'
        })
    }
}


// Mobile Nav
const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileItem = document.querySelectorAll('.mobile-item');

let showingMenu = false;

hamburger.addEventListener('click', () => {
    if (showingMenu === false) {
        hamburger.style.transform = 'rotate(720deg)';
        hamburgerIcon.style.background = 'transparent';
        hamburgerIcon.classList.add('open');
        mobileMenu.style.transform = 'translateY(0)';
        showingMenu = true;
    } else if (showingMenu === true) {
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

// Mobile card animation

let showing = false;
const info = document.querySelector('#info');


card.forEach((e) => {
    if (showing === false) {
        e.addEventListener('click', () => {
            if (showing === false) {
                window.scrollTo(0, 0);
                info.classList.add('info-show');
                e.classList.add('show')
                document.body.style.overflow = 'hidden';
                e.children[1].style.display = 'block';
                showing = true
            } else if (showing === true) {
                info.classList.remove('info-show')
                document.body.style.overflow = 'visible';
                e.classList.remove('show')
                e.children[1].style.display = 'none';
                showing = false

            }
        })
    }
})



