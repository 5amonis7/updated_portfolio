      const name = document.querySelector('#name')
      const email = document.querySelector('#email')
      const message = document.querySelector('#message')
      const checkMark = document.querySelector('.check-mark')
      const animation = document.querySelectorAll('.animation')
    
    
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
  